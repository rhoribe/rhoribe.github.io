import type { NextConfig } from "next";

const isUserSite = process.env.GITHUB_REPOSITORY?.endsWith("/rhoribe.github.io") ?? true;
const basePath =
  process.env.GITHUB_ACTIONS && !isUserSite
    ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1]}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
