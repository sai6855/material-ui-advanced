import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import NestedMenu from "@/src/components/SubMenu";
import DebouncedInput from "@/src/components/DebouncedInput";
import OTPInput from "@/src/components/OtpInput";
import InputFileUpload from "@/src/components/FileUpload";

// nested menu - done
// button drag-and-drop
// otp input - done
// debounced input - done
// swipeable tabs

export default function BasicButtons() {
  return (
    <>
      <NestedMenu />
      <DebouncedInput />
      <OTPInput />
      <InputFileUpload />
    </>
  );
}
