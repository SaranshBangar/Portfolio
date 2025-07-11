"use client";

import { Inter } from "next/font/google";
import "../globals.css";
import { useEffect } from "react";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { LinkPreview } from "@/components/ui/link-preview";
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
      <body className="h-screen overflow-hidden">
        <StickyBanner className="text-black bg-[#FFD700]">
          <p className="mx-0 max-w-[90%] drop-shadow-md">
            Check out my older portfolio!{" "}
            <LinkPreview url="https://www.saransh-bangar.xyz" className="underline text-black">
              Click here to explore
            </LinkPreview>
          </p>
        </StickyBanner>
        <section className="h-[calc(100%-3.5rem)]">{children}</section>
      </body>
    </html>
  );
}
