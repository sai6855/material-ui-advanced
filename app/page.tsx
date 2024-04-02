import * as React from "react";
import NestedMenu from "@/src/components/SubMenu";
import DebouncedInput from "@/src/components/DebouncedInput";
import OTPInput from "@/src/components/OtpInput";
import InputFileUpload from "@/src/components/FileUpload";
import SwipeableTabs from "@/src/components/SwipeableTabs";
import { Box, SxProps } from "@mui/material";

function ComponentWrapper({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) {
  return (
    <Box sx={{ mx: "15rem" }}>
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
    </Box>
  );
}

export default function BasicButtons() {
  return (
    <>
      <NestedMenu />
      <DebouncedInput />
      <OTPInput />
      <ComponentWrapper sx={{ py: 6 }}>
        <InputFileUpload />
      </ComponentWrapper>
      <SwipeableTabs />
    </>
  );
}
