export type BrandAssetStatus = "approved" | "fallback";
export type BrandAssetKind = "company" | "issuer";

export type BrandAsset = {
  id: string;
  kind: BrandAssetKind;
  displayName: string;
  localPath?: string;
  sourceUrl?: string;
  fallbackInitials: string;
  status: BrandAssetStatus;
};
