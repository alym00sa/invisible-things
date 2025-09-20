"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FloatingPlanets() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const planets = [
    {
      src: "/assets/stage_1.png",
      alt: "Planet Stage 1",
      size: 60,
      delay: 0,
      duration: 15,
      yOffset: 10,
    },
    {
      src: "/assets/stage_3.png",
      alt: "Planet Stage 3",
      size: 80,
      delay: 3,
      duration: 18,
      yOffset: 60,
    },
    {
      src: "/assets/stage_7.png",
      alt: "Planet Stage 7",
      size: 70,
      delay: 8,
      duration: 20,
      yOffset: 20,
    },
    {
      src: "/assets/stage_1.png",
      alt: "Planet Stage 1 Copy",
      size: 50,
      delay: 12,
      duration: 16,
      yOffset: 80,
    },
    {
      src: "/assets/stage_3.png",
      alt: "Planet Stage 3 Copy",
      size: 65,
      delay: 16,
      duration: 19,
      yOffset: 40,
    },
    {
      src: "/assets/stage_7.png",
      alt: "Planet Stage 7 Copy",
      size: 55,
      delay: 20,
      duration: 17,
      yOffset: 70,
    },
    {
      src: "/assets/stage_1.png",
      alt: "Planet Stage 1 Third",
      size: 45,
      delay: 24,
      duration: 21,
      yOffset: 30,
    },
    {
      src: "/assets/stage_3.png",
      alt: "Planet Stage 3 Third",
      size: 75,
      delay: 28,
      duration: 15,
      yOffset: 90,
    },
    {
      src: "/assets/stage_7.png",
      alt: "Planet Stage 7 Third",
      size: 60,
      delay: 32,
      duration: 18,
      yOffset: 50,
    },
    {
      src: "/assets/stage_1.png",
      alt: "Planet Stage 1 Fourth",
      size: 40,
      delay: 36,
      duration: 22,
      yOffset: 15,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {planets.map((planet, index) => (
        <motion.div
          key={index}
          className="absolute opacity-20"
          style={{
            top: `${planet.yOffset}%`,
          }}
          initial={{ x: "-100px" }}
          animate={{ x: "calc(100vw + 100px)" }}
          transition={{
            duration: planet.duration,
            delay: planet.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src={planet.src}
            alt={planet.alt}
            width={planet.size}
            height={planet.size}
            className="object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}