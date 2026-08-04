import { getBrandAsset, type BrandId } from "@/config/brand-assets";
import Image from "next/image";

export function LogoFrame({ brand, className = "" }: { brand: BrandId; className?: string }) {
  const asset = getBrandAsset(brand);
  return (
    <span className={`logo-frame ${className}`} aria-label={asset.displayName} role="img">
      {asset.status === "approved" && asset.localPath ? (
        // The text identity remains visible beside each mark; this label supports image-only uses.
        <Image src={asset.localPath} alt="" width={72} height={40} unoptimized />
      ) : (
        <span className="logo-fallback" aria-hidden="true">
          {asset.fallbackInitials}
        </span>
      )}
    </span>
  );
}
