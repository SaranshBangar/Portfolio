"use client";

import React, { useEffect } from "react";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <section className="flex justify-end md:justify-between items-center h-full w-full p-4">
      <p className="hidden md:block">bangar@portfolio:~$</p>
      <p>
        {formattedDate}, {formattedTime}
      </p>
    </section>
  );
};

export default CurrentTime;
