"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps & React.ComponentProps<"div">) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, bgcolor: "#e5e7eb", py: 5 }}>
          <Typography>{children} (swipe here)</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SwipeableTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const pointerEnterCoordinates = React.useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    pointerEnterCoordinates.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent, tabIndex: number) => {
    switch (tabIndex) {
      case 0:
        if (pointerEnterCoordinates.current - e.touches[0].clientX > 8) {
          setValue(1);
          pointerEnterCoordinates.current = 0;
        }
        break;
      case 1:
        if (pointerEnterCoordinates.current - e.touches[0].clientX > 8) {
          setValue(2);
          pointerEnterCoordinates.current = 0;
        } else if (
          pointerEnterCoordinates.current - e.touches[0].clientX <
          -8
        ) {
          setValue(0);
          pointerEnterCoordinates.current = 0;
        }
        break;

      case 2:
        if (pointerEnterCoordinates.current - e.touches[0].clientX < -8) {
          setValue(1);
          pointerEnterCoordinates.current = 0;
        }
        break;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e, 0)}
      >
        Item One
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={1}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e, 1)}
      >
        Item Two
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={2}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e, 2)}
      >
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
