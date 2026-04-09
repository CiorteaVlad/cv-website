"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const OFFSET_PX = 24;

export type FadeInDirection = "up" | "down" | "left" | "right";

function getInitial(direction: FadeInDirection) {
  switch (direction) {
    case "up":
      return { opacity: 0, x: 0, y: OFFSET_PX };
    case "down":
      return { opacity: 0, x: 0, y: -OFFSET_PX };
    case "left":
      return { opacity: 0, x: OFFSET_PX, y: 0 };
    case "right":
      return { opacity: 0, x: -OFFSET_PX, y: 0 };
    default:
      return { opacity: 0, x: 0, y: OFFSET_PX };
  }
}

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: FadeInDirection;
  className?: string;
}

export default function FadeIn({ children, delay = 0, direction = "up", className }: Props) {
  return (
    <motion.div
      className={className}
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
