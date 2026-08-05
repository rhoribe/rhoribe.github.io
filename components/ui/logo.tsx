"use client";

import Image from "next/image";
import { useState } from "react";
import { getBrandAsset, type BrandId } from "@/config/brand-assets";

export function Logo({ brand, className = "" }: { brand: BrandId; className?: string }) {
  const asset = getBrandAsset(brand);
  const [failed, setFailed] = useState(false);
  const showImage = asset.status === "approved" && Boolean(asset.localPath) && !failed;
  return (
    <span className={`logo-frame ${className}`} aria-label={asset.displayName} role="img">
      {showImage ? (
        <Image
          src={asset.localPath!}
          alt=""
          width={72}
          height={40}
          unoptimized
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="logo-fallback" aria-hidden="true">
          {asset.fallbackInitials}
        </span>
      )}
    </span>
  );
}
