import { Logo } from "./logo";
import type { BrandId } from "@/config/brand-assets";

export function LogoFrame({ brand, className = "" }: { brand: BrandId; className?: string }) {
  return <Logo brand={brand} className={className} />;
}
