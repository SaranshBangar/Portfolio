"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FileUser, Github, Linkedin, Mail, Moon, Sun, Bird, Codepen } from "lucide-react";
import { useTheme } from "next-themes";
import { SiLeetcode } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/animated-tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [showUpvote, setShowUpvote] = useState(false);

  const socialLinks = [
    {
      icon: <FileUser className="size-5" />,
      href: "https://drive.google.com/drive/folders/1GcwiK2DfFOEbB14ACD0m_vEjhQ5SqysZ?usp=sharing",
      label: "Resume",
    },
    {
      icon: <Github className="size-5" />,
      href: "https://github.com/SaranshBangar",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="size-5" />,
      href: "https://www.linkedin.com/in/saransh-bangar/",
      label: "LinkedIn",
    },
    {
      icon: <SiLeetcode className="size-5" />,
      href: "https://leetcode.com/u/SaranshBangar/",
      label: "LeetCode",
    },
  ];

  const handleThemeChange = (event: React.MouseEvent) => {
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
    }, 300);
  };

  useGSAP(() => {
    gsap.fromTo(".nav-link", { y: -10, opacity: 0, stagger: 0.1 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 });
  }, []);

  return (
    <header className="container mx-auto z-[60] px-4 py-4 flex justify-between items-center bg-white dark:bg-black">
      <LinkPreview url="https://peerlist.io/saransh_bangar/project/saranshs-personal-website">
        <a
          href="https://peerlist.io/saransh_bangar/project/saranshs-personal-website"
          target="_blank"
          rel="noreferrer"
          className="transition-all duration-300 ease-in-out"
          onMouseEnter={() => setShowUpvote(true)}
          onMouseLeave={() => setShowUpvote(false)}
        >
          <Image
            src={`https://peerlist.io/api/v1/projects/embed/PRJHBARD8OJ96EPMA3EAAE998RKEDQ?showUpvote=${showUpvote}&theme=${
              theme === "dark" ? "dark" : "light"
            }`}
            alt="Saransh's Personal Website"
            width={showUpvote ? 218 : 180}
            height={showUpvote ? 50 : 50}
          />
        </a>
      </LinkPreview>

      <div className="flex items-center space-x-4">
        <TooltipProvider openDelay={300} closeDelay={150} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
          {socialLinks.map((link, index) => (
            <Tooltip key={index} side="bottom" sideOffset={8} align="center">
              <TooltipTrigger>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 nav-link hover:scale-110 active:scale-95"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent arrow>
                <p className="text-sm font-medium">{link.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleThemeChange}
          className="rounded-full relative hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
