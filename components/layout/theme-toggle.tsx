"use client";
import { Moon, Sun } from "lucide-react";
import { IconButton } from "@/components/icons";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
type Theme = "light" | "dark";
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const reduced = useReducedMotion();
  useEffect(
    () => setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark"),
    [],
  );
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.add("theme-transition");
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
    window.setTimeout(() => document.documentElement.classList.remove("theme-transition"), 260);
  }
  return (
    <IconButton
      onClick={toggle}
      label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      aria-pressed={theme === "dark"}
    >
      <motion.span
        animate={reduced ? undefined : { rotate: theme === "dark" ? 0 : 180, scale: [1, 1.08, 1] }}
        transition={{ duration: 0.22 }}
      >
        {theme === "dark" ? <Sun aria-hidden /> : <Moon aria-hidden />}
      </motion.span>
    </IconButton>
  );
}
