"use client";

import { motion, useReducedMotion } from "framer-motion";

export function InfrastructureNodes() {
  const reduced = useReducedMotion();
  return (
    <svg className="infra-nodes" viewBox="0 0 420 260" aria-hidden="true" focusable="false">
      <path d="M55 150 150 70 250 130 365 55M150 70l20 125 80-65" className="infra-path" />
      {[
        [55, 150],
        [150, 70],
        [170, 195],
        [250, 130],
        [365, 55],
      ].map(([cx, cy], index) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="7"
          className="infra-node"
          animate={reduced ? undefined : { opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.4, delay: index * 0.18, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}
