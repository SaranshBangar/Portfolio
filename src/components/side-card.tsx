import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const SideCard = () => {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind",
    "C",
    "C++",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "GitHub",
  ];

  return (
    <Card className="mb-8">
      <CardHeader>
        <Avatar className="size-24 mx-auto">
          <AvatarImage
            src="/profilePicture.jpg"
            alt="Saransh Bangar"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
          <AvatarFallback className="rounded-full bg-primary/10">
            <Image
              src="/profilePicture.jpg"
              alt="Saransh Bangar"
              width={100}
              height={100}
              className="size-24 rounded-full object-cover"
              priority={true}
            />
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-center">Saransh Bangar</CardTitle>
        <CardDescription className="text-center">
          Full Stack Developer
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-sm">saranshbangad@gmail.com</p>
            <p className="text-sm">+91 9462239589</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SideCard;
