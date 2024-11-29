import React from "react";

const Header = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 dark:text-white">
          Saransh Bangar
        </h1>
        <p className="text-xl md:text-2xl text-black dark:text-white">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Header;
