"use client";

import { motion, useReducedMotion } from "framer-motion";
import { revealVariants } from "@/lib/motion";

export function Reveal({
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
      whileInView={reduced ? "reduced" : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
