"use client";

import { motion, useReducedMotion } from "framer-motion";
import { revealVariants } from "@/lib/motion";

export function AnimatedSection({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.section
      id={id}
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView={reduced ? "reduced" : "visible"}
      viewport={{ once: true, amount: 0.16 }}
    >
      {children}
    </motion.section>
  );
}
