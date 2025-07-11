import Terminal from "@/components/dev/terminal";
import ICard from "@/components/dev/i-card";
import React from "react";

const page = () => {
  return (
    <main className="flex justify-center items-start h-[calc(100vh-3.5rem)] p-2">
      <section className="w-1/3 m-2 p-4 border rounded-xl h-[calc(100%-16px)] overflow-hidden">
        <ICard />
      </section>
      <section className="w-2/3 m-2 p-4 border rounded-xl h-[calc(100%-16px)] overflow-x-hidden overflow-y-scroll">
        <Terminal />
      </section>
    </main>
  );
};

export default page;
