import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code, Star } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer Intern",
      company: "Erino",
      period: "Nov 2024 - Feb 2024",
      description: "Developed multiple features for the company's main product with React and TypeScript",
    },
    {
      id: 2,
      role: "Fullstack Developer Intern",
      company: "Fuelemy",
      period: "Jul 2024 - Jan 2024",
      description: "Made mulitple landing pages and dashboard with React and JavaScript",
    },
    {
      id: 3,
      role: "Associate Technical Lead",
      company: "Founders Club, SRMIST",
      period: "Oct 2023 - Present",
      description: "Worked along side a team of 3 to develop multiple projects for the college",
    },
    {
      id: 4,
      role: "Frontend Engineer Intern",
      company: "Falcon AI",
      period: "Jun 2024 - Aug 2024",
      description: "Developed company landing and dashboard pages with Next and TypeScript",
    },
  ];

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {experiences.map((exp, index) => (
            <li key={exp.id} className="mb-10 ml-6">
              <span className="absolute size-4 bg-primary/80 rounded-full -left-2"></span>
              <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">{exp.period}</time>
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p className="mb-4 text-base font-normal text-muted-foreground">{exp.company}</p>
              <p className="text-base font-normal">{exp.description}</p>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default Experience;
