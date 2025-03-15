import React from "react";
import { Pointer } from "./magicui/pointer";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme } = useTheme();

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 dark:text-white">Saransh Bangar</h1>
        <p className="text-xl md:text-2xl text-black dark:text-white">Full Stack Developer</p>
      </div>
      {theme === "dark" && (
        <Pointer>
          <div className="size-[4px] rounded-full bg-[#FFD700]"></div>
        </Pointer>
      )}
      {theme === "light" && (
        <Pointer>
          <div className="size-[4px] rounded-full bg-[#0000CC]"></div>
        </Pointer>
      )}
    </div>
  );
};

export default Header;
