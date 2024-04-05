import * as React from "react";
import NestedMenu from "@/src/components/NestedMenu";
import DebouncedInput from "@/src/components/DebouncedInput";
import OTPInput from "@/src/components/OtpInput";
import InputFileUpload from "@/src/components/InputFileUpload";
import SwipeableTabs from "@/src/components/SwipeableTabs";
import { Box, Divider, SxProps } from "@mui/material";
import fs from "node:fs";
import ComponentFooter from "@/src/ComponentFooter";

function Header({ title }: { title: string }) {
  return <h2>{title}</h2>;
}

function ComponentWrapper({
  children,
  sx,
  path,
  title,
}: {
  children: React.ReactNode;
  sx?: SxProps;
  path: string;
  title: string;
}) {
  const content = fs
    .readFileSync(path, "utf-8")
    .split("\n")
    .slice(1)
    .join("\n");

  return (
    <Box sx={{ mx: ["1rem", "15rem"], my: "1rem" }}>
      <Header title={title} />
      <Box
        sx={{
          p: 2,
          m: 1,
          border: "1px solid #cbd5e1",
          borderRadius: 3,
          width: "100%",
          py: 4,
          display: "grid",
          placeItems: "center",
        }}
      >
        {children}
      </Box>
      <ComponentFooter
        content={content}
        sourceCode={`https://github.com/sai6855/material-ui-advanced/blob/master/${path}`}
      />
      <Divider sx={{ pt: "1rem" }} />
    </Box>
  );
}

export default function Page() {
  return (
    <>
      <ComponentWrapper
        title="Nested Menu"
        path="src/components/NestedMenu.tsx"
        sx={{ display: "grid", placeItems: "center" }}
      >
        <NestedMenu />
      </ComponentWrapper>
      <ComponentWrapper
        title="Debounced Input"
        path="src/components/DebouncedInput.tsx"
      >
        <DebouncedInput />
      </ComponentWrapper>
      <ComponentWrapper title="OTP Input" path="src/components/OtpInput.tsx">
        <OTPInput />
      </ComponentWrapper>
      <ComponentWrapper
        title="Input File Upload"
        sx={{ py: 6 }}
        path="src/components/InputFileUpload.tsx"
      >
        <InputFileUpload />
      </ComponentWrapper>
      <ComponentWrapper
        title="Swipeable Tabs"
        path="src/components/SwipeableTabs.tsx"
      >
        <SwipeableTabs />
      </ComponentWrapper>
    </>
  );
}
