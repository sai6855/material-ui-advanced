"use client";
import * as React from "react";

const ScrollTo = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  return children;
};

export default ScrollTo;
