import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "ZipIt",
      description:
        "A fullstack application built with Next.js to make the PMSSS application process entirely online.",
      tags: ["Next.js", "Node.js", "Supabase", "Tailwind"],
      liveLink: "https://github.com/SaranshBangar/PMSSS-Student-Website",
      githubRepo: "https://github.com/SaranshBangar/PMSSS-Student-Website",
    },
    {
      id: 2,
      name: "StoreIt",
      description:
        "A fullstack cloud storage service like Google Drive and Dropbox",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Appwrite"],
      liveLink: "https://store-it-saransh-bangar.vercel.app/",
      githubRepo: "https://github.com/SaranshBangar/StoreIt",
    },
    {
      id: 3,
      name: "IdeaClinic",
      description:
        "Website developed for DEI, SRMIST, to support their innovation and entrepreneurship program.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      liveLink: "https://ideaclinic-forum.vercel.app/",
      githubRepo: "https://github.com/founder-srm/ideaclinic_forum",
    },
    {
      id: 4,
      name: "GPU Dash",
      description:
        "A real-time web portal application for displaying GPU and CPU data, utilizing Rust backend.",
      tags: ["Rust", "TypeScript", "React", "Tailwind"],
      liveLink: "https://github.com/Tom-Dick-Harry/gpu-dash-tdh",
      githubRepo: "https://github.com/Tom-Dick-Harry/gpu-dash-tdh",
    },
    {
      id: 5,
      name: "DevTinder",
      description:
        "A functioning clone of Tinder made exclusively for developers",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://github.com/SaranshBangar/DevTinder",
      githubRepo: "https://github.com/SaranshBangar/DevTinder",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div key={project.id}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardContent className="pt-0 flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
