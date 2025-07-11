import React from "react";
import { Card, CardContent } from "./ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer Intern",
      company: "Erino",
      period: "Dec 2024 - Feb 2025",
      bulletPoints: [
        "Built and maintained React and Material-UI components, improving UI consistency and user experience.",
        "Developed and refined RESTful APIs using Express.js and TypeScript, ensuring seamless integration with the frontend.",
        "Implemented performance optimization techniques, reducing component render times by 20%.",
      ],
      link: "https://erino.io/",
      companyLogo: "/erino_logo.png",
    },
    {
      id: 2,
      role: "Technical Lead",
      company: "Founders Club, SRMIST",
      period: "Oct 2023 - Present",
      bulletPoints: [
        "Led a team of developers to create and maintain web applications for various college initiatives.",
        "Implemented modern development practices and workflows to improve team productivity.",
        "Mentored junior developers and conducted code reviews to ensure high code quality standards.",
      ],
      link: "https://www.thefoundersclub.in/",
      companyLogo: "/founders_club_logo.jpg",
    },
    {
      id: 3,
      role: "Fullstack Developer Intern",
      company: "Fuelemy",
      period: "Jul 2024 - Jan 2025",
      bulletPoints: [
        "Engineered dynamic landing pages and dashboards using ReactJS, Express.js, and Tailwind CSS to enhance client interaction.",
        "Diagnosed and resolved frontend bugs, reducing reported issues by 35% and improving application stability.",
        "Developed responsive web applications with cross-browser compatibility, ensuring consistent user experience across devices.",
      ],
      link: "/",
      companyLogo: "/fuelemy_logo.png",
    },
    {
      id: 4,
      role: "Frontend Engineer Intern",
      company: "Falcon AI",
      period: "Jun 2024 - Aug 2024",
      bulletPoints: [
        "Built and maintained responsive user interfaces using ReactJS and SASS, ensuring seamless display of AI-generated outputs.",
        "Collaborated with backend and ML teams to integrate AI model outputs into production-facing UIs with high performance.",
        "Enhanced user experience by optimizing frontend rendering and improving UI consistency across devices.",
      ],
      link: "https://www.linkedin.com/company/getfalcon/",
      companyLogo: "/falcon_ai_logo.png",
    },
  ];

  return (
    <Card className="h-fit">
      <CardContent className="mt-6">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {experiences.map((exp, index) => (
            <li key={exp.id} className="mb-10 ml-6">
              <span className="absolute size-4 bg-primary/80 rounded-full -left-2"></span>
              <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">{exp.period}</time>
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <TooltipProvider key={index} delayDuration={500}>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="mb-4 text-base font-normal text-muted-foreground underline underline-offset-2">
                      <a href={exp.link} target="_blank">
                        {exp.company}
                      </a>
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <Image src={exp.companyLogo} alt={`${exp.company} logo`} width={64} height={64} className="size-16 object-contain" />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <ul className="list-disc pl-5 space-y-1">
                {exp.bulletPoints.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default Experience;
