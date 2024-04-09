"use client";
import * as React from "react";
import { Snackbar, snackbarClasses } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const StackedSnackBar = ({ maxCount = 5 }: { maxCount: number }) => {
  const [stacked, setStacked] = React.useState<
    Array<{ open: boolean; key: number; message: string }>
  >([]);

  const count = React.useRef(0);

  const handleClick = () => {
    if (stacked.length >= maxCount) {
      return;
    }
    setStacked((prev) => [
      ...prev,
      {
        open: true,
        key: count.current,
        message: "Email sent",
      },
    ]);
    count.current += 1;
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason: string,
    index: number
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setStacked((prev) =>
      prev
        .map((_, i) => (i === index ? { ..._, open: false } : _))
        .filter(({ open }) => open)
    );
  };

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      {stacked.map(({ open, key, message }, index) => {
        return (
          <Snackbar
            key={key}
            open={open}
            autoHideDuration={6000}
            onClose={(event, reason) => handleClose(event, reason, index)}
            message={message}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            sx={{
              [`&.${snackbarClasses.root}`]: {
                bottom: (index + 1) * 24 + index * 30 + "px",
              },
            }}
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

function StackedSnackBarDemo() {
  return <StackedSnackBar maxCount={5} />;
}

export default StackedSnackBarDemo;
