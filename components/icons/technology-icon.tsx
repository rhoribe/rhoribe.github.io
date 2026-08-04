import { technologies } from "@/config/technologies";
import type { IconSize, TechnologyName } from "@/types/icon";
import { AppIcon } from "./app-icon";
import { BrandIcon } from "./brand-icon";
export function TechnologyIcon({
  technology,
  size,
  decorative = true,
  label,
}: {
  technology: TechnologyName;
  size?: IconSize;
  decorative?: boolean;
  label?: string;
}) {
  const item = technologies[technology];
  return item.brand ? (
    <BrandIcon brand={item.brand} size={size} decorative={decorative} label={label} />
  ) : (
    <AppIcon name={item.fallback} size={size} decorative={decorative} label={label} />
  );
}
