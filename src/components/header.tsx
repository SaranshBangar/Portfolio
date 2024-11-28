import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./particles-background";

const Header = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-repeat-[24px_24px]"></div>
      {/* <ParticlesBackground id="particles" /> */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 dark:text-white">
          Saransh Bangar
        </h1>
        <p className="text-xl md:text-2xl text-black dark:text-white">
          Full Stack Developer
        </p>
      </motion.div>
    </div>
  );
};

export default Header;
