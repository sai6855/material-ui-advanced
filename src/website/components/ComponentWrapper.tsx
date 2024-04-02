import { Box } from "@mui/material";
import React from "react";

export default function ComponentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ p: 20, bgcolor: "red", width: "100%" }}>{children} dsds</Box>
  );
}
