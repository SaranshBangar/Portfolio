"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/animated-tabs";
import Testimonials from "@/components/testimonials";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import SideCard from "@/components/side-card";
import NavBar from "@/components/navbar";
import Header from "@/components/header";
import ParticlesBackground from "@/components/particles-background";
import Connect from "@/components/connect";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { useTheme } from "next-themes";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Resume() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <StickyBanner className="text-white dark:text-black dark:bg-[#FFD700] bg-[#8888CC]" hideOnScroll>
        <p className="mx-0 max-w-[90%] drop-shadow-md text-center">
          Check out the latest updates on my portfolio specially developed for developers!{" "}
          <LinkPreview url="https://www.saransh-bangar.xyz/dev" className="underline text-white dark:text-black">
            Click here to explore
          </LinkPreview>
        </p>
      </StickyBanner>

      <div className="sticky z-10 top-0 backdrop-blur-md bg-background/80 border-b">
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
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                <TabsTrigger value="connect">Connect</TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="mt-4">
                <Experience />
              </TabsContent>

              <TabsContent value="projects" className="mt-4">
                <Projects />
              </TabsContent>

              <TabsContent value="testimonials" className="mt-4">
                <Testimonials />
              </TabsContent>

              <TabsContent value="connect" className="mt-4">
                <Connect />
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
    </div>
  );
}
