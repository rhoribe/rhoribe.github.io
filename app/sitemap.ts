import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
export const revalidate = false;
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteConfig.url, lastModified: new Date() }];
}
