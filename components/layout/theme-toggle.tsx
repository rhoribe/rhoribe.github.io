"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
type Theme = "light" | "dark";
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(
    () => setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark"),
    [],
  );
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }
  return (
    <button
      className="icon-button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      aria-pressed={theme === "dark"}
    >
      {theme === "dark" ? <Sun aria-hidden /> : <Moon aria-hidden />}
    </button>
  );
}
