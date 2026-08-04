import type { ReactNode } from "react";
export function IconBadge({
  children,
  className = "",
  title,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <span className={`icon-badge ${className}`} title={title}>
      {children}
    </span>
  );
}
