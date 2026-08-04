import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";
import { metadataValues } from "@/lib/metadata";
export const metadata: Metadata = {
  title: metadataValues.title,
  description: metadataValues.description,
  alternates: { canonical: metadataValues.canonical },
  openGraph: {
    title: metadataValues.title,
    description: metadataValues.description,
    url: metadataValues.canonical,
    type: "website",
  },
  robots: { index: true, follow: true },
};
const themeScript = `(()=>{try{const saved=localStorage.getItem("theme");const system=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=saved==="light"||saved==="dark"?saved:system}catch{document.documentElement.dataset.theme="dark"}})()`;
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <Script id="theme" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
