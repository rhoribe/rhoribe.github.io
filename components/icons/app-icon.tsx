import type { ComponentProps } from "react";
import { appIcons, iconSizes } from "@/config/icons";
import type { IconName, IconSize } from "@/types/icon";
export function AppIcon({
  name,
  size = "regular",
  decorative = true,
  label,
  ...props
}: { name: IconName; size?: IconSize; decorative?: boolean; label?: string } & Omit<
  ComponentProps<"svg">,
  "aria-hidden"
>) {
  const Icon = appIcons[name];
  return (
    <Icon
      size={iconSizes[size]}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : label}
      role={decorative ? undefined : "img"}
      {...props}
    />
  );
}
