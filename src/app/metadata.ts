import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saransh Bangar - Full Stack Developer & Software Engineer",
  description:
    "Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio showcasing projects, skills, and professional experience.",
  generator: "Next.js",
  applicationName: "Saransh Bangar Portfolio",
  keywords: [
    "Saransh Bangar",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "Portfolio",
    "Software Development",
  ],
  authors: [{ name: "Saransh Bangar" }],
  creator: "Saransh Bangar",
  publisher: "Saransh Bangar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.saransh-bangar.xyz/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Saransh Bangar - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio showcasing projects, skills, and professional experience.",
    url: "https://www.saransh-bangar.xyz/",
    siteName: "Saransh Bangar - Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saransh Bangar - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    creator: "@SaranshBangar",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
