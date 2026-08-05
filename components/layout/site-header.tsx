"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { menuVariants } from "@/lib/motion";
import { navigation } from "@/content/navigation";
import { AppIcon } from "@/components/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const trigger = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const sections = navigation
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -55%", threshold: [0.1, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      removeEventListener("scroll", onScroll);
    };
  }, []);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        requestAnimationFrame(() => trigger.current?.focus());
      }
    };
    addEventListener("keydown", escape);
    return () => removeEventListener("keydown", escape);
  }, [open]);
  function closeMenu(focus = false) {
    setOpen(false);
    if (focus) requestAnimationFrame(() => trigger.current?.focus());
  }
  const links = (mobile = false) =>
    navigation.map(([label, href, icon]) => (
      <a
        key={href}
        href={href}
        aria-current={active === href ? "location" : undefined}
        className={active === href ? "active" : undefined}
        onClick={() => mobile && closeMenu()}
      >
        <AppIcon name={icon} size="compact" /> <span>{label}</span>
        {!mobile && active === href && (
          <motion.span layoutId="active-nav" className="active-indicator" />
        )}
      </a>
    ));
  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <a className="brand" href="#main">
        Ricardo Horibe
      </a>
      <nav className="desktop-nav" aria-label="Primary">
        {links()}
      </nav>
      <button
        ref={trigger}
        className="menu-button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Toggle menu"
        onClick={() => (open ? closeMenu(true) : setOpen(true))}
      >
        {open ? <X aria-hidden /> : <Menu aria-hidden />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile"
            variants={menuVariants}
            initial="hidden"
            animate={reduced ? { opacity: 1, y: 0 } : "visible"}
            exit={reduced ? { opacity: 0 } : "exit"}
          >
            {links(true)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
