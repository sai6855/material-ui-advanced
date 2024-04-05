import * as React from "react";
import NestedMenu from "@/src/components/NestedMenu";
import DebouncedInput from "@/src/components/DebouncedInput";
import OTPInput from "@/src/components/OtpInput";
import InputFileUpload from "@/src/components/InputFileUpload";
import SwipeableTabs from "@/src/components/SwipeableTabs";
import { Box, Divider, SxProps } from "@mui/material";
import fs from "node:fs";
import ComponentFooter from "@/src/ComponentFooter";

function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h2>{title}</h2>
      <p
        style={{
          margin: "1rem 0",
        }}
      >
        {description}
      </p>
    </>
  );
}

function ComponentWrapper({
  children,
  sx,
  path,
  title,
  description,
}: {
  children: React.ReactNode;
  sx?: SxProps;
  path: string;
  title: string;
  description: string;
}) {
  const content = fs
    .readFileSync(path, "utf-8")
    .split("\n")
    .slice(1)
    .join("\n");

  return (
    <Box sx={{ mx: ["1rem", "15rem"], my: "1rem" }}>
      <Header title={title} description={description} />
      <Box
        sx={{
          p: 2,
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
        description="A component for organizing menu items into subcategories, enabling easier navigation through hierarchical menus."
        sx={{ display: "grid", placeItems: "center" }}
      >
        <NestedMenu />
      </ComponentWrapper>
      <ComponentWrapper
        description="An input field that delays processing user input until they pause typing"
        title="Debounced Input"
        path="src/components/DebouncedInput.tsx"
      >
        <DebouncedInput />
      </ComponentWrapper>
      <ComponentWrapper
        description="A specialized input field for entering one-time passwords"
        title="OTP Input"
        path="src/components/OtpInput.tsx"
      >
        <OTPInput />
      </ComponentWrapper>
      <ComponentWrapper
        description="A file upload component that allows users to select files for upload, also supports drag-and-drop functionality."
        title="Input File Upload"
        sx={{ py: 6 }}
        path="src/components/InputFileUpload.tsx"
      >
        <InputFileUpload />
      </ComponentWrapper>
      <ComponentWrapper
        description="Tabs you can slide through to switch between different sections, making it easy to navigate on touchscreens."
        title="Swipeable Tabs"
        path="src/components/SwipeableTabs.tsx"
      >
        <SwipeableTabs />
      </ComponentWrapper>
    </>
  );
}
