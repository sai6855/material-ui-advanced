"use client";
import * as React from "react";
import Snackbar, {
  SnackbarProps,
  snackbarClasses,
} from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Slide, { SlideProps } from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";

type StackedSnackBarProps = Omit<SnackbarProps, "children"> & {
  children?: React.ReactNode;
  stacked: Array<{ open: boolean; key: number; message: string }>;
  setStacked: React.Dispatch<
    React.SetStateAction<Array<{ open: boolean; key: number; message: string }>>
  >;
};

const StackedSnackBarContext = React.createContext<StackedSnackBarProps>({
  stacked: [],
  setStacked: () => {},
});

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

const StackedSnackBarBody = () => {
  const {
    anchorOrigin = { vertical: "top", horizontal: "right" },
    children,
    stacked,
    setStacked,
    ...props
  } = React.useContext(StackedSnackBarContext);
  const TIMEOUT = 200;

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason: string,
    index: number
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setStacked((prev) =>
      prev.map((_, i) => (i === index ? { ..._, open: false } : _))
    );

    setTimeout(() => {
      setStacked((prev) => prev.filter(({ open }) => open));
    }, TIMEOUT);
  };

  return (
    <div>
      {stacked.map(({ open, key, message }, index) => {
        return (
          <Snackbar
            {...props}
            key={key}
            open={open}
            autoHideDuration={6000}
            onClose={(event, reason) => handleClose(event, reason, index)}
            message={message}
            anchorOrigin={anchorOrigin}
            sx={{
              [`&.${snackbarClasses.root}`]: {
                [anchorOrigin.vertical]: (index + 1) * 24 + index * 30 + "px",
              },
            }}
            TransitionComponent={SlideTransition}
            TransitionProps={{ timeout: TIMEOUT }}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={(event) => handleClose(event, "", index)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
        );
      })}
    </div>
  );
};

function StackedSnackBar(props: StackedSnackBarProps) {
  return (
    <StackedSnackBarContext.Provider value={props}>
      {props.children}
    </StackedSnackBarContext.Provider>
  );
}

function StackedSnackBarDemo() {
  const snackbarMessages = [
    "Message sent successfully!",
    "Error: Please check your internet connection.",
    "Welcome back! You have new notifications.",
    "Thank you for your order!",
    "Reminder: Your appointment is tomorrow.",
  ];

  const [stacked, setStacked] = React.useState<
    Array<{ open: boolean; key: number; message: string }>
  >([]);

  const count = React.useRef(0);
  const maxCount = 5;

  const handleClick = () => {
    if (stacked.length >= maxCount) {
      return;
    }
    setStacked((prev) => [
      ...prev,
      {
        open: true,
        key: count.current,
        message:
          snackbarMessages[prev.length] ??
          snackbarMessages[Math.floor(Math.random() * snackbarMessages.length)],
      },
    ]);
    count.current += 1;
  };

  return (
    <>
      <StackedSnackBar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        stacked={stacked}
        setStacked={setStacked}
      >
        <Button onClick={handleClick}>Open Stacked Snackbars</Button>
        <StackedSnackBarBody />
      </StackedSnackBar>
    </>
  );
}

export default StackedSnackBarDemo;
