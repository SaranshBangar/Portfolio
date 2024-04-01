'use client'

import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
    {
      title: "HTML5",
      description:
        "Proficient in structuring web content with semantic HTML, ensuring accessibility and SEO optimization.",
      link: "https://github.com/SaranshBangar",
    },
    {
      title: "CSS (Tailwind)",
      description:
        "Skilled in crafting visually stunning designs efficiently using Tailwind CSS utility classes.",
      link: "https://github.com/SaranshBangar",
    },
    {
      title: "JavaScript",
      description:
        "Experienced in creating interactive and dynamic web applications, leveraging JavaScript's versatility.",
      link: "https://github.com/SaranshBangar",
    },
    {
      title: "ReactJS",
      description:
        "Expertise in building modern, component-based UIs for scalable web applications using ReactJS.",
      link: "https://github.com/SaranshBangar",
    },
    {
      title: "Next.js",
      description:
        "Proficient in developing server-rendered React applications with Next.js for enhanced performance and SEO.",
      link: "https://github.com/SaranshBangar",
    },
    {
      title: "TypeScript",
      description:
        "Advanced proficiency in writing type-safe JavaScript applications for improved code maintainability and scalability.",
      link: "https://github.com/SaranshBangar",
    },
    {
      title: "C/C++",
      description:
        "Experienced in developing high-performance applications and systems software using C/C++.",
      link: "https://github.com/SaranshBangar",
    },
    {
      title: "OOPS",
      description:
        "Strong understanding and application of Object-Oriented Programming principles for building modular and maintainable codebases.",
      link: "https://github.com/SaranshBangar",
    },
    {
      title: "SQL",
      description:
        "Proficient in designing and querying relational databases using SQL, ensuring efficient data management and retrieval.",
      link: "https://github.com/SaranshBangar",
    },
  ];
  

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export default Skills