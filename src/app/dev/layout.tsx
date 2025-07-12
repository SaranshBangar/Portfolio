"use client";

import { Inter } from "next/font/google";

import "../globals.css";
import { useEffect } from "react";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
    document.title = "Saransh Bangar - SDE";
  }, []);

  return (
    <html lang="en" className={inter.className}>
      <body className="h-screen overflow-hidden cascadia-mono text-[#4AF626] text-sm">{children}</body>
    </html>
  );
}
