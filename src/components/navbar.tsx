import React, { useState } from "react";
import { ConfettiButton } from "./ui/confetti";
import { Button } from "./ui/button";
import { FileUser, Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { SiLeetcode } from "react-icons/si";
import { AnimatePresence } from "framer-motion";
import { motion } from "motion/react";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [isChangingTheme, setIsChangingTheme] = useState(false);
  const [themeChangePosition, setThemeChangePosition] = useState({
    x: 0,
    y: 0,
  });

  const socialLinks = [
    {
      icon: <FileUser className="size-5" />,
      href: "https://rxresu.me/saranshbangad/software-developer",
      label: "LeetCode",
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
    {
      icon: <Mail className="size-5" />,
      href: "mailto:saranshbangad@gmail.com",
      label: "Email",
    },
  ];

  const handleThemeChange = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setThemeChangePosition({ x: clientX, y: clientY });
    setIsChangingTheme(true);
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
      setTimeout(() => setIsChangingTheme(false), 400);
    }, 300);
  };

  <AnimatePresence>
    {isChangingTheme && (
      <motion.div
        className="fixed inset-0 z-50 transition-colors duration-500"
        style={{
          backgroundColor:
            theme === "light"
              ? "var(--background-light)"
              : "var(--background-dark)",
        }}
        initial={{
          clipPath: `circle(0% at ${themeChangePosition.x}px ${themeChangePosition.y}px)`,
        }}
        animate={{
          clipPath: `circle(250% at ${themeChangePosition.x}px ${themeChangePosition.y}px)`,
        }}
        exit={{
          clipPath: `circle(0% at ${themeChangePosition.x}px ${themeChangePosition.y}px)`,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    )}
  </AnimatePresence>;

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
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleThemeChange}
          className="rounded-full relative"
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
