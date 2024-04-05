"use client";
import * as React from "react";
import { Button, Snackbar } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CallMadeIcon from "@mui/icons-material/CallMade";

function ComponentFooter({
  content,
  sourceCode,
}: {
  content: string;
  sourceCode: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(content);
          setOpen(true);
        }}
        startIcon={<ContentCopyIcon fontSize={"small"} />}
      >
        Copy code
      </Button>
      <Button href={sourceCode} target="_blank" endIcon={<CallMadeIcon />}>
        source code
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        message="Code copied to clipboard!"
      />
    </>
  );
}

export default ComponentFooter;
