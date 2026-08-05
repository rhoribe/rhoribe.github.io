export const designTokens = {
  colors: {
    background: "#0b1018",
    surface: "#111a27",
    text: "#f5f8fc",
    muted: "#9eacbe",
    accent: "#44d7b6",
    secondaryAccent: "#8f8dff",
    focus: "#f6c85f",
  },
  spacing: ["s1", "s2", "s3", "s4", "s5", "s6", "s7"],
  typography: ["display", "section", "card", "body", "metadata", "caption", "badge"],
  layout: { readingMeasure: "70ch", contentWidth: "76rem", logoFrame: "4.5rem" },
  motion: { hoverLift: "2px", duration: "180ms", easing: "ease-out", reducedMotion: true },
} as const;
