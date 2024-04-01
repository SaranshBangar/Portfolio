import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">
      <Header />
      <div className="flex justify-center items-center">
        <Projects />
      </div>
      <div className="mt-36">
        <Skills />
      </div>
    </main>
  );
}
