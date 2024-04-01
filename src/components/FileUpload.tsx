"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload() {
  const [file, setFile] = React.useState<File | undefined>(undefined);
  const [fileEntered, setFileEntered] = React.useState(false);
  return (
    <Box
      sx={{
        width: "100%",
        height: "10rem",
      }}
      onDrop={(e) => {
        e.preventDefault();
        setFileEntered(false);
        setFile(e.dataTransfer.files[0]);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setFileEntered(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setFileEntered(false);
      }}
    >
      {fileEntered ? (
        <p>Drop file</p>
      ) : (
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput
            type="file"
            onChange={(e) => {
              setFile(e.target.files![0]);
            }}
          />
        </Button>
      )}

      {file && <p>{file.name}</p>}
    </Box>
  );
}
