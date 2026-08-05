import { BriefcaseBusiness } from "lucide-react";
import type { ComponentProps } from "react";

export function BriefcaseIcon({
  label = "Company",
  ...props
}: { label?: string } & Omit<ComponentProps<typeof BriefcaseBusiness>, "aria-hidden">) {
  return (
    <BriefcaseBusiness
      aria-label={label}
      className="briefcase-icon"
      role="img"
      size={22}
      strokeWidth={2}
      {...props}
    />
  );
}
