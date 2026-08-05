"use client";

import { useEffect, useRef, useState } from "react";

export function useTimelineReveal(ids: readonly string[], reducedMotion: boolean) {
  const nodes = useRef(new Map<string, HTMLElement>());
  const [revealed, setRevealed] = useState<ReadonlySet<string>>(() => new Set(ids));
  const [activeId, setActiveId] = useState<string | null>(null);
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    if (reducedMotion || typeof IntersectionObserver === "undefined") return;
    const visible = new Map<string, IntersectionObserverEntry>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-company-id");
          if (!id) return;
          if (entry.isIntersecting) {
            visible.set(id, entry);
            setRevealed((current) => (current.has(id) ? current : new Set([...current, id])));
          } else visible.delete(id);
        });
        const next =
          [...visible.entries()].sort(
            ([, a], [, b]) => b.intersectionRatio - a.intersectionRatio,
          )[0]?.[0] ?? null;
        setActiveId(next);
      },
      { rootMargin: "-15% 0px -40%", threshold: [0, 0.15, 0.45, 0.7] },
    );
    nodes.current.forEach((node) => observer.observe(node));
    setRevealed(new Set());
    setEnhanced(true);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return {
    activeId,
    enhanced,
    revealed,
    register: (id: string) => (node: HTMLElement | null) => {
      if (node) nodes.current.set(id, node);
      else nodes.current.delete(id);
    },
  };
}
