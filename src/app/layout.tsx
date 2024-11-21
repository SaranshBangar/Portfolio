"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sparkles } from "lucide-react";
import CustomBot from "@/components/custom-bot";
import { useState } from "react";
import MetaData from "@/components/MetaData";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCustomBotOpen, setIsCustomBotOpen] = useState(false);

  const toggleCustomBot = () => {
    setIsCustomBotOpen(!isCustomBotOpen);
  };

  return (
    <>
      <MetaData />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CustomBot
            isOpen={isCustomBotOpen}
            onClose={() => setIsCustomBotOpen(false)}
          />
          <div
            className="fixed right-4 bottom-4 border-2 bg-white dark:bg-black dark:border-white/50 border-black/50 p-2 rounded-lg cursor-pointer hover:bg-accent transition-colors"
            onClick={toggleCustomBot}
          >
            <Sparkles />
          </div>
        </ThemeProvider>
      </body>
    </>
  );
}
