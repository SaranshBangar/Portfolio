"use client";
import { cn } from "@/lib/cn";
import React, { useState, useImperativeHandle, forwardRef } from "react";
import { motion, useAnimate } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  onAsyncClick?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

export interface StatefulButtonRef {
  setLoading: () => void;
  setSuccess: () => void;
  setError: () => void;
  reset: () => void;
}

export const StatefulButton = forwardRef<StatefulButtonRef, ButtonProps>(({ className, children, onAsyncClick, ...props }, ref) => {
  const [scope, animate] = useAnimate();
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const animateLoading = async () => {
    setState("loading");
    await animate(
      ".loader",
      {
        width: "20px",
        scale: 1,
        display: "block",
      },
      {
        duration: 0.2,
      }
    );
  };

  const animateSuccess = async () => {
    setState("success");
    await animate(
      ".loader",
      {
        width: "0px",
        scale: 0,
        display: "none",
      },
      {
        duration: 0.2,
      }
    );
    await animate(
      ".check",
      {
        width: "20px",
        scale: 1,
        display: "block",
      },
      {
        duration: 0.2,
      }
    );

    setTimeout(async () => {
      await animate(
        ".check",
        {
          width: "0px",
          scale: 0,
          display: "none",
        },
        {
          duration: 0.2,
        }
      );
      setState("idle");
    }, 2000);
  };

  const animateError = async () => {
    setState("error");
    await animate(
      ".loader",
      {
        width: "0px",
        scale: 0,
        display: "none",
      },
      {
        duration: 0.2,
      }
    );
    await animate(
      ".error",
      {
        width: "20px",
        scale: 1,
        display: "block",
      },
      {
        duration: 0.2,
      }
    );

    setTimeout(async () => {
      await animate(
        ".error",
        {
          width: "0px",
          scale: 0,
          display: "none",
        },
        {
          duration: 0.2,
        }
      );
      setState("idle");
    }, 3000);
  };

  const resetState = async () => {
    setState("idle");
    await animate(
      [".loader", ".check", ".error"],
      {
        width: "0px",
        scale: 0,
        display: "none",
      },
      {
        duration: 0.2,
      }
    );
  };

  useImperativeHandle(ref, () => ({
    setLoading: animateLoading,
    setSuccess: animateSuccess,
    setError: animateError,
    reset: resetState,
  }));

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (state === "loading") return;

    if (onAsyncClick) {
      try {
        await animateLoading();
        await onAsyncClick(event);
        await animateSuccess();
      } catch (error) {
        await animateError();
      }
    } else if (props.onClick) {
      props.onClick(event);
    }
  };

  const getButtonColor = () => {
    switch (state) {
      case "loading":
        return "bg-transparent hover:ring-green-500";
      case "success":
        return "bg-green-500 hover:ring-green-500";
      case "error":
        return "bg-yellow-500 hover:ring-yellow-500";
      default:
        return "bg-green-500 hover:ring-green-500";
    }
  };

  const { onClick, onDrag, onDragStart, onDragEnd, onAnimationStart, onAnimationEnd, ...buttonProps } = props;

  return (
    <motion.button
      layout
      layoutId="button"
      ref={scope}
      className={cn(
        `flex min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 dark:ring-offset-black ${getButtonColor()}`,
        className
      )}
      {...buttonProps}
      onClick={handleClick}
      disabled={state === "loading" || buttonProps.disabled}
    >
      <motion.div layout className="flex items-center gap-2">
        <Loader />
        <CheckIcon />
        <ErrorIcon />
        <motion.span layout>{children}</motion.span>
      </motion.div>
    </motion.button>
  );
});

StatefulButton.displayName = "StatefulButton";

const Loader = () => {
  return (
    <motion.svg
      animate={{
        rotate: [0, 360],
      }}
      initial={{
        scale: 0,
        width: 0,
        display: "none",
      }}
      style={{
        scale: 0.5,
        display: "none",
      }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        ease: "linear",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="loader text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3a9 9 0 1 0 9 9" />
    </motion.svg>
  );
};

const CheckIcon = () => {
  return (
    <motion.svg
      initial={{
        scale: 0,
        width: 0,
        display: "none",
      }}
      style={{
        scale: 0.5,
        display: "none",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="check text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 12l2 2l4 -4" />
    </motion.svg>
  );
};

const ErrorIcon = () => {
  return (
    <motion.svg
      initial={{
        scale: 0,
        width: 0,
        display: "none",
      }}
      style={{
        scale: 0.5,
        display: "none",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="error text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 8l0 4" />
      <path d="M12 16l.01 0" />
    </motion.svg>
  );
};
