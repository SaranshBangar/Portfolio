"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Moon,
  Sun,
  Briefcase,
  Code,
  Star,
  Github,
  Linkedin,
  Mail,
  Globe,
  FileUser,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { SiLeetcode } from "react-icons/si";
import { ConfettiButton } from "@/components/ui/confetti";
import { toast } from 'react-hot-toast';


export default function Resume() {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("experience");
  const [isChangingTheme, setIsChangingTheme] = useState(false);
  const [themeChangePosition, setThemeChangePosition] = useState({
    x: 0,
    y: 0,
  });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please mail on saranshbangad@gmailcom', {
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const experiences = [
    {
      id: 1,
      role: "Fullstack Developer Intern",
      company: "Fuelemy",
      period: "Jul 2024 - Present",
      description: "Made mulitple landing pages and dashboard with React and JavaScript",
      icon: <Code className="w-6 h-6" />,
    },
    {
      id: 2,
      role: "Associate Technical Lead",
      company: "Founders Club, SRMIST",
      period: "Oct 2023 - Present",
      description: "Worked along side a team of 3 to develop multiple projects for the college",
      icon: <Star className="w-6 h-6" />,
    },
    {
      id: 3,
      role: "Frontend Engineer Intern",
      company: "Falcon AI",
      period: "Jun 2024 - Aug 2024",
      description: "Developed company landing and dashboard pages with Next and TypeScript",
      icon: <Code className="w-6 h-6" />,
    },
  ];

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
      name: "IdeaClinic",
      description:
        "Website developed for DEI, SRMIST, to support their innovation and entrepreneurship program.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      liveLink: "https://ideaclinic-forum.vercel.app/",
      githubRepo: "https://github.com/founder-srm/ideaclinic_forum",
    },
    {
      id: 3,
      name: "GPU Dash",
      description:
        "A real-time web portal application for displaying GPU and CPU data, utilizing Rust backend.",
      tags: ["Rust", "TypeScript", "React", "Tailwind"],
      liveLink: "https://github.com/Tom-Dick-Harry/gpu-dash-tdh",
      githubRepo: "https://github.com/Tom-Dick-Harry/gpu-dash-tdh",
    },
    {
      id: 4,
      name: "DevTinder",
      description:
        "A functioning clone of Tinder made exclusively for developers",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://github.com/SaranshBangar/DevTinder",
      githubRepo: "https://github.com/SaranshBangar/DevTinder",
    },
  ];

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

  const testimonials = [
    {
      id: 1,
      text: "Saransh showed remarkable proficiency in frontend development, quickly adapting to our workflow and technologies.",
      author: "Vaibhav Agarwal, CEO at Falcon AI",
    },
    {
      id: 2,
      text: "Working with Saransh was a pleasure. His technical skills are top-notch, and he always goes above and beyond to ensure project success.",
      author: "Shreyans Bhargava, COO at Fuelemy",
    },
    {
      id: 3,
      text: "Saransh's ability to solve complex problems is truly remarkable. He's not just a developer, but a valuable asset to any team he's part of.",
      author: "Likhit Ganni, COO at Fuelemy",
    },
  ];

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

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

      <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
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
      </div>

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
      </AnimatePresence>

      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-repeat-[24px_24px]"></div>
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 dark:text-white">
            Saransh Bangar
          </h1>
          <p className="text-xl md:text-2xl text-black dark:text-white">Full Stack Developer</p>
        </motion.div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-[300px_1fr]">

          <aside className="md:sticky md:top-24 md:h-[calc(100vh-6rem)] overflow-y-auto">
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
          </aside>

          <section>
            <Tabs
              defaultValue="experience"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <TabsContent value="experience" className="mt-4">
                    <Card className="h-fit">
                      <CardHeader>
                        <CardTitle>Work Experience</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="relative border-l border-gray-200 dark:border-gray-700">
                          {experiences.map((exp, index) => (
                            <motion.li
                              key={exp.id}
                              className="mb-10 ml-6"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <span className="absolute flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full -left-5">
                                {exp.icon}
                              </span>
                              <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                                {exp.period}
                              </time>
                              <h3 className="text-lg font-semibold">
                                {exp.role}
                              </h3>
                              <p className="mb-4 text-base font-normal text-muted-foreground">
                                {exp.company}
                              </p>
                              <p className="text-base font-normal">
                                {exp.description}
                              </p>
                            </motion.li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="projects" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Projects</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {projects.map((project, index) => (
                            <motion.div
                              key={project.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
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
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="testimonials" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Testimonials</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4">
                          {testimonials.map((testimonial, index) => (
                            <motion.div
                              key={testimonial.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <Card className="w-full">
                                <CardContent className="pt-6">
                                  <blockquote className="text-lg italic mb-4">
                                    "{testimonial.text}"
                                  </blockquote>
                                  <p className="font-semibold text-right">
                                    {testimonial.author}
                                  </p>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="contact" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Contact Me</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label htmlFor="name" className="text-sm font-medium">
                                Name
                              </label>
                              <Input
                                id="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="email" className="text-sm font-medium">
                                Email
                              </label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="Your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                              Message
                            </label>
                            <Textarea
                              id="message"
                              placeholder="Your message"
                              rows={4}
                              value={formData.message}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <Button
                            type="submit"
                            className="w-full"
                            disabled={loading}
                          >
                            {loading ? 'Sending...' : 'Send Message'}
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>

                </motion.div>
              </AnimatePresence>
            </Tabs>
          </section>
        </div>
      </main>
    </div>
  );
}

