"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sparkles } from "lucide-react";
import CustomBot from "@/components/custom-bot";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isCustomBotOpen, setIsCustomBotOpen] = useState(false);

  const toggleCustomBot = () => {
    setIsCustomBotOpen(!isCustomBotOpen);
  };

  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <CustomBot isOpen={isCustomBotOpen} onClose={() => setIsCustomBotOpen(false)} />
          <div
            className="fixed right-4 bottom-4 border-2 bg-white dark:bg-black dark:border-white/50 border-black/50 p-2 rounded-lg cursor-pointer hover:bg-accent transition-colors animate-pulse"
            onClick={toggleCustomBot}
          >
            <Sparkles />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
