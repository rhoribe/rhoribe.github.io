import type { Transition, Variants } from "framer-motion";

export const motionTokens = {
  duration: { instant: 0.15, fast: 0.22, base: 0.32, slow: 0.48, emphasis: 0.6 },
  distance: { compact: 12, desktop: 22 },
  stagger: 0.065,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const transition = (duration = motionTokens.duration.base): Transition => ({
  duration,
  ease: motionTokens.ease,
});

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: motionTokens.distance.desktop },
  visible: { opacity: 1, y: 0, transition: transition() },
  reduced: { opacity: 1, y: 0, transition: { duration: motionTokens.duration.instant } },
};

export const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: motionTokens.stagger, delayChildren: 0.04 } },
};

export const menuVariants: Variants = {
  hidden: { opacity: 0, y: -8, transition: transition(motionTokens.duration.instant) },
  visible: { opacity: 1, y: 0, transition: transition(motionTokens.duration.fast) },
  exit: { opacity: 0, y: -6, transition: transition(motionTokens.duration.instant) },
};
