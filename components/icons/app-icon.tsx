import type { ComponentProps } from "react";
import { appIcons, brands, iconSizes } from "@/config/icons";
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
  const brand = brands[name as keyof typeof brands];
  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={iconSizes[size]}
        height={iconSizes[size]}
        aria-hidden={decorative || undefined}
        aria-label={decorative ? undefined : (label ?? brand.title)}
        role={decorative ? undefined : "img"}
        {...props}
      >
        <path fill="currentColor" d={brand.path} />
      </svg>
    );
  }

  const Icon = appIcons[name] ?? appIcons.skills;
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
