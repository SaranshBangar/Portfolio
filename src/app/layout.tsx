import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialLinks from "@/components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saransh Bangar",
  description: "Frontend Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <SocialLinks />
        </div>
        {children}
      </body>
    </html>
  );
}
