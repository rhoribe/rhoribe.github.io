"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function MotionSafe({
  children,
  fallback,
  requiresFinePointer = false,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  requiresFinePointer?: boolean;
}) {
  const reduced = useReducedMotion();
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const query = matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduced || (requiresFinePointer && !fine) ? <>{fallback ?? children}</> : <>{children}</>;
}
