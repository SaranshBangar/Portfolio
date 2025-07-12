"use client";

import "../globals.css";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function DevLayout({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
    document.title = "Saransh Bangar - SDE";
  }, [setTheme]);

  return <div className={`h-screen overflow-hidden cascadia-mono text-[#4AF626] text-sm`}>{children}</div>;
}
