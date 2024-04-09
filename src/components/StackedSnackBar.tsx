"use client";
import * as React from "react";
import { Snackbar, snackbarClasses } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const StackedSnackBar = ({ maxCount = 5 }: { maxCount: number }) => {
  const [stacked, setStacked] = React.useState<Array<boolean>>([]);

  const handleClick = () => {
    setStacked((prev) => [...prev, true]);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason: string,
    index: number
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setStacked((prev) => prev.map((_, i) => (i === index ? false : _)).filter(Boolean));
  };

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      {stacked.map((open, index) => {
        return (
          <Snackbar
            key={index}
            open={open}
            autoHideDuration={6000}
            onClose={(event, reason) => handleClose(event, reason, index)}
            message={"message"}
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
