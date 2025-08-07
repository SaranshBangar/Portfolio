"use client";

import Terminal from "@/app/dev/components/terminal";
import React from "react";
import CurrentTime from "./components/current-time";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-[#4AF626]/60">Loading 3D Scene...</div>,
});

const page = () => {
  return (
    <main className="flex flex-col justify-center items-center h-[100vh] dev-text-highlight">
      <section className="w-full h-[10vh] flex flex-col justify-center items-start p-4">
        <h1 className="text-2xl">Saransh Bangar</h1>
        <h2 className="text-white/80 font-thin">Software Developer</h2>
      </section>
      <section className="flex w-full h-full">
        <div className="w-2/5 p-4 border-[#4AF626] border-t-[1px] border-b-[1px] border-r-[1px] h-[86vh] overflow-hidden hidden lg:block">
          {process.env.NEXT_PUBLIC_SPLINE_URL && <Spline scene={process.env.NEXT_PUBLIC_SPLINE_URL} />}
        </div>
        <div className="w-full max-lg:mx-4 lg:w-3/5 p-4 z-10 border-[#4AF626] border-t-[1px] border-b-[1px] h-[86vh] overflow-x-hidden overflow-y-scroll terminal-scrollbar">
          <Terminal />
        </div>
      </section>
      <section className="w-full h-[4vh]">
        <CurrentTime />
      </section>
    </main>
  );
};

export default page;
