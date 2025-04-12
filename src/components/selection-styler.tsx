"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export const SelectionStyler = () => {
  const { theme } = useTheme();

  useEffect(() => {
    let styleElement = document.getElementById("selection-style");
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = "selection-style";
      document.head.appendChild(styleElement);
    }

    const selectionColor = theme === "dark" ? "rgba(255, 215, 0, 0.2)" : "rgba(0, 0, 204, 0.2)";

    styleElement.innerHTML = `
      ::selection {
        background: ${selectionColor} !important;
      }
      ::-moz-selection {
        background: ${selectionColor} !important;
      }
      ::-webkit-selection {
        background: ${selectionColor} !important;
      }
    `;
  }, [theme]);

  return null;
};

export default SelectionStyler;
