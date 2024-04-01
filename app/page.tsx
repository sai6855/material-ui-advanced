import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import NestedMenu from "@/src/components/SubMenu";
import DebouncedInput from "@/src/components/DebouncedInput";
import OTPInput from "@/src/components/OtpInput";

// nested menu
// button drag-and-drop
// otp input
// debounced input
// swipeable tabs

export default function BasicButtons() {
  return (
    <>
      <NestedMenu />
      <DebouncedInput />
      <OTPInput />
    </>
  );
}
