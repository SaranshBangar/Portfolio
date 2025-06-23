"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Testimonials from "@/components/testimonials";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import SideCard from "@/components/side-card";
import NavBar from "@/components/navbar";
import Header from "@/components/header";
import ParticlesBackground from "@/components/particles-background";
import Connect from "@/components/connect";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <NavBar />
      </div>

      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ParticlesBackground id="particles" className="absolute inset-0 h-full w-full" />
        </div>
        <Header />
      </section>

      <main className={`container mx-auto px-4 py-8 z-50`}>
        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          <aside className="md:sticky md:top-24 md:h-[calc(100vh-6rem)] overflow-y-auto">
            <SideCard />
          </aside>

          <section>
            <Tabs defaultValue="experience" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                <TabsTrigger value="connect">Connect</TabsTrigger>
              </TabsList>
              <AnimatePresence mode="wait">
                {activeTab === "experience" && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TabsContent value="experience" className="mt-4">
                      <Experience />
                    </TabsContent>
                  </motion.div>
                )}
                {activeTab === "projects" && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TabsContent value="projects" className="mt-4">
                      <Projects />
                    </TabsContent>
                  </motion.div>
                )}
                {activeTab === "testimonials" && (
                  <motion.div
                    key="testimonials"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TabsContent value="testimonials" className="mt-4">
                      <Testimonials />
                    </TabsContent>
                  </motion.div>
                )}
                {activeTab === "connect" && (
                  <motion.div
                    key="connect"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TabsContent value="connect" className="mt-4">
                      <Connect />
                    </TabsContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Tabs>
          </section>
        </div>
      </main>
    </div>
  );
}
