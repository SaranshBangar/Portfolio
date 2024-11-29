import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "next-themes";
import { color } from "framer-motion";

interface ParticlesBackgroundProps {
  id: string;
  className: string;
}

const ParticlesBackground = ({ id, className }: ParticlesBackgroundProps) => {
  const { theme } = useTheme();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: false,
        zIndex: 1,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 200,
            links: {
              opacity: theme === "dark" ? 0.5 : 0.3,
            },
          },
        },
      },
      particles: {
        color: {
          value: theme === "dark" ? "#FFD700" : "#CCAC00",
        },
        links: {
          color: "#FFD700",
          distance: 150,
          enable: true,
          opacity: theme === "dark" ? 0.3 : 0.5,
          width: 1,
        },
        move: {
          direction: "top",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 600,
          },
          value: 250,
        },
        opacity: {
          value: theme === "dark" ? 0.5 : 0.3,
        },
        shape: {
          type: "edge",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  if (init) {
    return <Particles id={id} options={options} className={className} />;
  }

  return null;
};

export default ParticlesBackground;
