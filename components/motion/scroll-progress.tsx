"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export function ScrollProgress({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.5"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <div className="timeline-wrap">
      <motion.span
        aria-hidden
        className="timeline-progress"
        style={{ scaleY: reduced ? 1 : progress }}
      />
      <ol ref={ref} className="timeline">
        {children}
      </ol>
    </div>
  );
}
