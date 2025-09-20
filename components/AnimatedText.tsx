"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const chars = text.split("");
  let iCounter = 0;

  return (
    <div className="flex flex-wrap justify-center items-center">
      {chars.map((char, index) => {
        const isSpace = char === " ";
        const isI = char.toLowerCase() === "i";

        if (isSpace) {
          return <span key={index} className="w-4 md:w-8" />;
        }

        if (isI) {
          const currentIIndex = iCounter;
          iCounter++;

          return (
            <div key={index} className="relative inline-block">
              <motion.span
                className="inline-block text-7xl md:text-9xl font-black"
                initial={{ color: "#ffffff" }}
                animate={{ color: "#000000" }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + currentIIndex * 0.15,
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-black origin-left"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + currentIIndex * 0.15,
                  ease: "easeInOut",
                }}
              />
            </div>
          );
        }

        return (
          <span key={index} className="inline-block text-7xl md:text-9xl font-black text-white">
            {char}
          </span>
        );
      })}
    </div>
  );
}