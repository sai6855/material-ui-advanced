import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import NestedMenu from "@/src/components/SubMenu";
import DebouncedInput from "@/src/components/DebouncedInput";
import OTPInput from "@/src/components/OtpInput";
import InputFileUpload from "@/src/components/FileUpload";
import SwipeableTabs from "@/src/components/SwipeableTabs";

export default function BasicButtons() {
  return (
    <>
      <NestedMenu />
      <DebouncedInput />
      <OTPInput />
      <InputFileUpload />
      <SwipeableTabs />
    </>
  );
}
