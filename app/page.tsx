import * as React from "react";
import NestedMenu from "@/src/components/NestedMenu";
import DebouncedInput from "@/src/components/DebouncedInput";
import OTPInput from "@/src/components/OtpInput";
import InputFileUpload from "@/src/components/InputFileUpload";
import SwipeableTabs from "@/src/components/SwipeableTabs";
import { Box, SxProps } from "@mui/material";
import fs from "node:fs";
import ComponentFooter from "@/src/ComponentFooter";

function ComponentWrapper({
  children,
  sx,
  path,
}: {
  children: React.ReactNode;
  sx?: SxProps;
  path: string;
}) {
  const content = fs
    .readFileSync(path, "utf-8")
    .split("\n")
    .slice(1)
    .join("\n");

  return (
    <Box sx={{ mx: ["1rem", "15rem"] }}>
      <Box
        sx={{
          p: 2,
          m: 1,
          border: "1px solid #cbd5e1",
          borderRadius: 3,
          width: "100%",
          py: 4,
          ...sx,
        }}
      >
        {children}
      </Box>
      <ComponentFooter content={content} />
    </Box>
  );
}

export default function Page() {
  return (
    <>
      <ComponentWrapper path="src/components/NestedMenu.tsx">
        <NestedMenu />
      </ComponentWrapper>
      <ComponentWrapper path="src/components/DebouncedInput.tsx">
        <DebouncedInput />
      </ComponentWrapper>
      <ComponentWrapper path="src/components/OtpInput.tsx">
        <OTPInput />
      </ComponentWrapper>
      <ComponentWrapper
        sx={{ py: 6 }}
        path="src/components/InputFileUpload.tsx"
      >
        <InputFileUpload />
      </ComponentWrapper>
      <ComponentWrapper path="src/components/SwipeableTabs.tsx">
        <SwipeableTabs />
      </ComponentWrapper>
    </>
  );
}
