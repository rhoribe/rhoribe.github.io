"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerVariants } from "@/lib/motion";

export function StaggerContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={reduced ? { duration: 0.15 } : undefined}
    >
      {children}
    </motion.div>
  );
}
