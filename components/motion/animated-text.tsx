"use client";

import { motion, useReducedMotion } from "framer-motion";
import { revealVariants } from "@/lib/motion";

export function AnimatedText({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      animate={reduced ? "reduced" : "visible"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
