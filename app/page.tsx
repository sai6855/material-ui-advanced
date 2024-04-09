import * as React from "react";
import NestedMenu from "@/src/components/NestedMenu";
import DebouncedInput from "@/src/components/DebouncedInput";
import OTPInput from "@/src/components/OtpInput";
import InputFileUpload from "@/src/components/InputFileUpload";
import SwipeableTabs from "@/src/components/SwipeableTabs";
import { Box, Divider, IconButton, SxProps } from "@mui/material";
import fs from "node:fs";
import ComponentFooter from "@/src/ComponentFooter";
import ScrollTo from "./components/ScrollTo";
import GitHubIcon from "@mui/icons-material/GitHub";
import StackedSnackBarDemo from "@/src/components/StackedSnackBar";

function Header({
  title,
  description,
}: {
  title: string;
  description: string | React.JSX.Element;
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
  id,
}: {
  children: React.ReactNode;
  sx?: SxProps;
  path: string;
  title: string;
  description: string | React.JSX.Element;
  id: string;
}) {
  const content = fs
    .readFileSync(path, "utf-8")
    .split("\n")
    .slice(1)
    .join("\n");

  return (
    <Box sx={{ my: "1rem" }} id={id}>
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
    <Box sx={{ mx: ["1rem", "15rem"] }} id="main">
      <ScrollTo>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span/>
          <Box component={"h1"} sx={{ my: "1rem", color: "#6c6bac" }}>
            Material UI advanced
          </Box>
          <IconButton href="https://github.com/sai6855/material-ui-advanced">
            <GitHubIcon htmlColor="black" fontSize="large" />
          </IconButton>
        </Box>
        <div style={{ textAlign: "center", opacity: "0.7" }}>
          Collection of advanced UI components bulit on top of material-ui that can be used in your
          projects. Each component comes with its own source code that you can
          <strong> copy and paste </strong> into your project.
        </div>
        <ComponentWrapper
          id="nested-menu"
          title="Nested Menu"
          path="src/components/NestedMenu.tsx"
          description="A component for organizing menu items into subcategories, enabling easier navigation through hierarchical menus."
          sx={{ display: "grid", placeItems: "center" }}
        >
          <NestedMenu />
        </ComponentWrapper>
        <ComponentWrapper
          id="debounced-input"
          description="An input field that delays processing user input until they pause typing"
          title="Debounced Input"
          path="src/components/DebouncedInput.tsx"
        >
          <DebouncedInput />
        </ComponentWrapper>
        <ComponentWrapper
          id="otp-input"
          description="A specialized input field for entering one-time passwords"
          title="OTP Input"
          path="src/components/OtpInput.tsx"
        >
          <OTPInput />
        </ComponentWrapper>
        <ComponentWrapper
          id="input-file-upload"
          description={
            <span>
              A file upload component that allows users to select files for
              upload, also supports <strong> drag-and-drop </strong>{" "}
              functionality
            </span>
          }
          title="Input File Upload"
          sx={{ py: 6 }}
          path="src/components/InputFileUpload.tsx"
        >
          <InputFileUpload />
        </ComponentWrapper>
        <ComponentWrapper
          id="swipeable-tabs"
          description="Tabs you can slide through to switch between different sections, making it easy to navigate on touchscreens."
          title="Swipeable Tabs"
          path="src/components/SwipeableTabs.tsx"
        >
          <SwipeableTabs />
        </ComponentWrapper>
        <ComponentWrapper
          id="stacked-snackbar"
          description="A stack of snackbars that appear one on top of the other, allowing users to see multiple notifications at once."
          title="Stacked Snackbar"
          path="src/components/StackedSnackBar.tsx"
        >
          <StackedSnackBarDemo />
        </ComponentWrapper>
      </ScrollTo>
    </Box>
  );
}
