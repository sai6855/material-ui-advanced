"use client";
import { Button } from "@mui/material";

function ComponentFooter({ content }: { content: string }) {
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(content);
      }}
    >
      Copy code
    </Button>
  );
}

export default ComponentFooter;
