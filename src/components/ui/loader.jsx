"use client";
import { motion } from "motion/react";
import React from "react";

export const LoaderOne = () => {
  const transition = (x) => {
    return {
      duration: 1,
      repeat: Infinity,
      repeatType: "loop",
      delay: x * 0.2,
      ease: "easeInOut",
    };
  };
  return (
    <div className="flex items-center gap-2">
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={transition(0)}
        className="h-4 w-4 rounded-full border border-neutral-300 bg-linear-to-b from-neutral-400 to-neutral-300"
      />
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={transition(1)}
        className="h-4 w-4 rounded-full border border-neutral-300 bg-linear-to-b from-neutral-400 to-neutral-300"
      />
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={transition(2)}
        className="h-4 w-4 rounded-full border border-neutral-300 bg-linear-to-b from-neutral-400 to-neutral-300"
      />
    </div>
  );
};

export const LoaderTwo = () => {
  const transition = (x) => {
    return {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      delay: x * 0.2,
      ease: "easeInOut",
    };
  };
  return (
    <div className="flex items-center">
      <motion.div
        transition={transition(0)}
        initial={{
          x: 0,
        }}
        animate={{
          x: [0, 20, 0],
        }}
        className="h-4 w-4 rounded-full bg-neutral-200 shadow-md dark:bg-neutral-500"
      />
      <motion.div
        initial={{
          x: 0,
        }}
        animate={{
          x: [0, 20, 0],
        }}
        transition={transition(0.4)}
        className="h-4 w-4 -translate-x-2 rounded-full bg-neutral-200 shadow-md dark:bg-neutral-500"
      />
      <motion.div
        initial={{
          x: 0,
        }}
        animate={{
          x: [0, 20, 0],
        }}
        transition={transition(0.8)}
        className="h-4 w-4 -translate-x-4 rounded-full bg-neutral-200 shadow-md dark:bg-neutral-500"
      />
    </div>
  );
};

export const LoaderThree = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 32 32"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
      style={{ originX: "50%", originY: "50%" }}
    >
      <path
        d="M0 0 C10.56 0 21.12 0 32 0 C32 10.56 32 21.12 32 32 C21.44 32 10.88 32 0 32 C0 21.44 0 10.88 0 0 Z"
        fill="#FE0202"
      />
      <path
        d="M0 0 C2.05078125 0.03255208 4.1015625 0.06510417 6.15234375 0.09765625 C6.48234375 1.41765625 6.81234375 2.73765625 7.15234375 4.09765625 C5.83234375 4.42765625 4.51234375 4.75765625 3.15234375 5.09765625 C3.15234375 4.43765625 3.15234375 3.77765625 3.15234375 3.09765625 C2.49234375 3.09765625 1.83234375 3.09765625 1.15234375 3.09765625 C1.15234375 8.70765625 1.15234375 14.31765625 1.15234375 20.09765625 C-0.16765625 19.76765625 -1.48765625 19.43765625 -2.84765625 19.09765625 C-2.87449612 16.11843032 -2.89441662 13.1394433 -2.91015625 10.16015625 C-2.91853516 9.31001953 -2.92691406 8.45988281 -2.93554688 7.58398438 C-2.93876953 6.77509766 -2.94199219 5.96621094 -2.9453125 5.1328125 C-2.95054932 4.38394775 -2.95578613 3.63508301 -2.96118164 2.86352539 C-2.80271766 0.39864378 -2.46310433 0.13018522 0 0 Z"
        fill="#FEF7F7"
        transform="translate(7.84765625 5.90234375)"
      />
      <path
        d="M0 0 C0.99 0 1.98 0 3 0 C3 6.6 3 13.2 3 20 C1.68 19.67 0.36 19.34 -1 19 C-1.02683987 16.02077407 -1.04676037 13.04178705 -1.0625 10.0625 C-1.07087891 9.21236328 -1.07925781 8.36222656 -1.08789062 7.48632812 C-1.09111328 6.67744141 -1.09433594 5.86855469 -1.09765625 5.03515625 C-1.10289307 4.2862915 -1.10812988 3.53742676 -1.11352539 2.76586914 C-1 1 -1 1 0 0 Z"
        fill="#FEF4F4"
        transform="translate(18 6)"
      />
      <path
        d="M0 0 C2.64 0 5.28 0 8 0 C8.33 1.32 8.66 2.64 9 4 C7.68 4.33 6.36 4.66 5 5 C5 4.34 5 3.68 5 3 C2.525 2.01 2.525 2.01 0 1 C0 0.67 0 0.34 0 0 Z"
        fill="#FED7D7"
        transform="translate(6 6)"
      />
      <path
        d="M0 0 C1.98 0.495 1.98 0.495 4 1 C3.67 2.32 3.34 3.64 3 5 C1.68 5 0.36 5 -1 5 C-0.67 3.35 -0.34 1.7 0 0 Z"
        fill="#FFE5E5"
        transform="translate(23 21)"
      />
      <path
        d="M0 0 C1.98 0.495 1.98 0.495 4 1 C3.67 2.32 3.34 3.64 3 5 C1.68 5 0.36 5 -1 5 C-0.67 3.35 -0.34 1.7 0 0 Z"
        fill="#FEE5E5"
        transform="translate(11 21)"
      />
      <path
        d="M0 0 C2.475 0.495 2.475 0.495 5 1 C4.67 2.32 4.34 3.64 4 5 C3.01 5 2.02 5 1 5 C0.67 3.35 0.34 1.7 0 0 Z"
        fill="#FEE4E3"
        transform="translate(22 6)"
      />
    </motion.svg>
  );
};

export const LoaderFour = ({ text = "Loading..." }) => {
  return (
    <div className="relative font-bold text-black perspective:1000px dark:text-white">
      <motion.span
        animate={{
          skew: [0, -40, 0],
          scaleX: [1, 2, 1],
        }}
        transition={{
          duration: 0.05,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 2,
          ease: "linear",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        className="relative z-20 inline-block"
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-[#00e571]/50 blur-[0.5px] dark:text-[#00e571]"
        animate={{
          x: [-2, 4, -3, 1.5, -2],
          y: [-2, 4, -3, 1.5, -2],
          opacity: [0.3, 0.9, 0.4, 0.8, 0.3],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-[#8b00ff]/50 dark:text-[#8b00ff]"
        animate={{
          x: [0, 1, -1.5, 1.5, -1, 0],
          y: [0, -1, 1.5, -0.5, 0],
          opacity: [0.4, 0.8, 0.3, 0.9, 0.4],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          times: [0, 0.3, 0.6, 0.8, 1],
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};

export const LoaderFive = ({ text }) => {
  return (
    <div className="font-sans font-bold [--shadow-color:var(--color-neutral-500)] dark:[--shadow-color:var(--color-neutral-100)]">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{
            scale: [1, 1.1, 1],
            textShadow: [
              "0 0 0 var(--shadow-color)",
              "0 0 1px var(--shadow-color)",
              "0 0 0 var(--shadow-color)",
            ],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: i * 0.05,
            ease: "easeInOut",
            repeatDelay: 2,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};
