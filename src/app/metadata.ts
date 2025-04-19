import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saransh Bangar - SDE | Full Stack Developer",
  description:
    "Software Development Engineer specializing in React, Next.js, TypeScript, and modern web technologies. Explore my portfolio showcasing innovative projects, technical skills, and professional experience.",
  generator: "Next.js",
  applicationName: "Saransh Bangar Portfolio",
  keywords: [
    "Saransh Bangar",
    "Saransh",
    "Bangar",
    "SDE",
    "Software Development Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Software Development",
    "UI/UX",
    "Web Applications",
    "Tech Professional",
    "Node.js",
    "Modern Web Development",
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
    title: "Saransh Bangar - SDE | Full Stack Developer",
    description:
      "Software Development Engineer specializing in React, Next.js, and modern web technologies. Explore my portfolio showcasing innovative projects, technical skills, and professional experience.",
    url: "https://www.saransh-bangar.xyz/",
    siteName: "Saransh Bangar - Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profilePicture.jpg",
        width: 1200,
        height: 630,
        alt: "Saransh Bangar - Software Development Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saransh Bangar - SDE | Full Stack Developer",
    description: "Software Development Engineer specializing in React, Next.js, and modern web technologies. View my projects and experience.",
    creator: "@SaranshBangar",
    images: ["/profilePicture.jpg"],
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
