"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/navigation";
import { ThemeToggle } from "./theme-toggle";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a className="brand" href="#main">
        Ricardo Horibe
      </a>
      <nav className="desktop-nav" aria-label="Primary">
        {navigation.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
      <button
        className="menu-button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
