"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Mail, Phone, Share2, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const SideCard = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "shadcn",
    "Material UI",
    "Chakra UI",
    "Node.js",
    "Express",
    "Hono",
    "C",
    "C++",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Git",
    "GitHub",
    "Docker",
    "REST API",
  ];

  const handleShare = async () => {
    const contactInfo = `
Saransh Bangar
Full Stack Developer

Contact :
Email => saranshbangad@gmail.com
Phone => +91 9462239589
GitHub => https://github.com/SaranshBangar

Skills => ${skills.join(", ")}
    `.trim();

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Saransh Bangar - Full Stack Developer",
          text: contactInfo,
        });
      } else {
        await navigator.clipboard.writeText(contactInfo);
        alert("Contact information copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing: ", error);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      href: "mailto:saranshbangad@gmail.com",
      label: "Email",
      content: "saranshbangad@gmail.com",
    },
    {
      icon: Phone,
      href: "tel:+919462239589",
      label: "Phone",
      content: "+91 9462239589",
    },
    {
      icon: Github,
      href: "https://github.com/SaranshBangar",
      label: "GitHub",
      content: "SaranshBangar",
    },
    {
      icon: Share2,
      onClick: handleShare,
      label: "Share contact information",
      content: "Share Contact Info",
    },
  ];

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <CardHeader className="relative pb-0">
        <div className="absolute inset-0 z-0" />
        <div className="relative z-10">
          <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-background">
            <AvatarImage src="/profilePicture.jpg" alt="Saransh Bangar" className="object-cover" />
            <AvatarFallback>SB</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold text-center">Saransh Bangar</CardTitle>
          <CardDescription className="text-center text-primary/80">Full Stack Developer</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="flex justify-center space-x-4">
          {contactItems.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={item.onClick} aria-label={item.label} asChild={!item.onClick}>
                    {item.onClick ? (
                      <item.icon className="h-4 w-4" />
                    ) : (
                      <a
                        href={item.href}
                        target={item.icon === Github ? "_blank" : undefined}
                        rel={item.icon === Github ? "noopener noreferrer" : undefined}
                      >
                        <item.icon className="h-4 w-4" />
                      </a>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.content}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="rounded-full px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SideCard;
