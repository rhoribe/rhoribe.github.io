import { LogoFrame } from "./logo-frame";
import type { BrandId } from "@/config/brand-assets";
export function CompanyLogo({ brand }: { brand: BrandId }) {
  return <LogoFrame brand={brand} className="company-logo" />;
}
