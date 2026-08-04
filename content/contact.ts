import type { IconName } from "@/types/icon";
export const contactLinks: { label: string; href: string; icon: IconName; external?: boolean }[] = [
  { label: "Email Ricardo Horibe", href: "mailto:ricardohoribe1@gmail.com", icon: "email" },
  {
    label: "Ricardo Horibe on GitHub",
    href: "https://github.com/rhoribe",
    icon: "github",
    external: true,
  },
  {
    label: "Ricardo Horibe on LinkedIn",
    href: "https://www.linkedin.com/in/ricardohoribe",
    icon: "linkedin",
    external: true,
  },
];
