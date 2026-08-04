"use client";

import { MotionConfig } from "framer-motion";
import { motionTokens } from "@/lib/motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease }}
    >
      {children}
    </MotionConfig>
  );
}
