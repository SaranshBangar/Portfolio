import React, { useState } from "react";
import { ConfettiButton } from "./ui/confetti";
import { Button } from "./ui/button";
import { FileUser, Github, Linkedin, Mail, Moon, Sun, Bird } from "lucide-react";
import { useTheme } from "next-themes";
import { SiLeetcode } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

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
      icon: <Bird className="size-5" />,
      href: "https://codolio.com/profile/SaranshBangar/card",
      label: "Codolio",
    },
    {
      icon: <SiLeetcode className="size-5" />,
      href: "https://leetcode.com/u/SaranshBangar/",
      label: "LeetCode",
    },
    {
      icon: <Mail className="size-5" />,
      href: "mailto:saranshbangad@gmail.com",
      label: "Email",
    },
  ];

  const handleThemeChange = (event: React.MouseEvent) => {
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
    }, 300);
  };

  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
      <ConfettiButton
        options={{
          get angle() {
            return 270 + Math.random() * 90;
          },
        }}
      >
        <h1 className="text-2xl font-bold">{`</>`}</h1>
      </ConfettiButton>
      <div className="flex items-center space-x-4">
        {socialLinks.map((link, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
        <Button variant="ghost" size="icon" onClick={handleThemeChange} className="rounded-full relative">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
