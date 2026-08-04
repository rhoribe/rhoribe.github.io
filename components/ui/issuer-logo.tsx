import { LogoFrame } from "./logo-frame";
import type { BrandId } from "@/config/brand-assets";
export function IssuerLogo({ brand }: { brand: BrandId }) {
  return <LogoFrame brand={brand} className="issuer-logo" />;
}
