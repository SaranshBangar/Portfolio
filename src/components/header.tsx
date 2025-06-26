import React from "react";
import { Pointer } from "./ui/pointer";
import { useTheme } from "next-themes";
import RotatingText from "./rotating-text";

const Header = () => {
  const { theme } = useTheme();

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 dark:text-white">Saransh Bangar</h1>
        <RotatingText
          texts={["Full Stack Developer", "Frontend Developer", "UX Designer", "Backend Developer"]}
          mainClassName={`px-2 sm:px-2 md:px-3 ${
            theme === "dark" ? "border-[1px] border-[#FFD700]/80 bg-black" : "bg-[#8888CC]"
          } text-primary overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-xl md:text-2xl`}
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={5000}
        />
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
