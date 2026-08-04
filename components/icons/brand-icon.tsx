import { brands, iconSizes } from "@/config/icons";
import type { BrandColorMode, BrandName, IconSize } from "@/types/icon";
export function BrandIcon({
  brand,
  size = "regular",
  decorative = true,
  label,
  brandColorMode = "inherit",
  className,
}: {
  brand: BrandName;
  size?: IconSize;
  decorative?: boolean;
  label?: string;
  brandColorMode?: BrandColorMode;
  className?: string;
}) {
  const item = brands[brand];
  if (!item) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      width={iconSizes[size]}
      height={iconSizes[size]}
      className={className}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : (label ?? item.title)}
      role={decorative ? undefined : "img"}
      style={brandColorMode === "brand" ? { color: `#${item.hex}` } : undefined}
    >
      <path fill="currentColor" d={item.path} />
    </svg>
  );
}
