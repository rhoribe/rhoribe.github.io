import type { Metadata } from "next";
import "@/styles/globals.css";
import { metadataValues } from "@/lib/metadata";
import { MotionProvider } from "@/components/motion/motion-provider";
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ricardo Horibe",
  jobTitle: "Site Reliability Engineer (SRE) – Specialist",
  email: "ricardohoribe1@gmail.com",
  sameAs: ["https://github.com/rhoribe", "https://www.linkedin.com/in/ricardohoribe"],
  knowsAbout: ["AWS", "Kubernetes", "Terraform", "DevOps", "Cloud", "Observability"],
};
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
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
