"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function InteractiveCard({
  children,
  className = "",
  tilt = false,
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  function move(event: React.PointerEvent<HTMLElement>) {
    if (
      !tilt ||
      reduced ||
      !matchMedia("(hover: hover) and (pointer: fine)").matches ||
      !ref.current
    )
      return;
    const box = ref.current.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    ref.current.style.setProperty("--tilt-x", `${x * 1.2}deg`);
    ref.current.style.setProperty("--tilt-y", `${y * -1.2}deg`);
  }
  function reset() {
    ref.current?.style.removeProperty("--tilt-x");
    ref.current?.style.removeProperty("--tilt-y");
  }
  return (
    <article
      ref={ref}
      className={`card interactive-card ${className}`}
      onPointerMove={move}
      onPointerLeave={reset}
    >
      {children}
    </article>
  );
}
