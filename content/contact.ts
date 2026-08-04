import type { IconName } from "@/types/icon";
export const contactLinks: { label: string; href: string; icon: IconName; external?: boolean }[] = [
  { label: "Email", href: "mailto:ricardohoribe1@gmail.com", icon: "email" },
  {
    label: "GitHub",
    href: "https://github.com/rhoribe",
    icon: "github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ricardohoribe",
    icon: "linkedin",
    external: true,
  },
];
