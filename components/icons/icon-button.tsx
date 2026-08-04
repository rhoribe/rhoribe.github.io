import type { ButtonHTMLAttributes, ReactNode } from "react";
export function IconButton({
  label,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string; children: ReactNode }) {
  return (
    <button {...props} className={`icon-button ${props.className ?? ""}`} aria-label={label}>
      {children}
    </button>
  );
}
