import { AppIcon, BrandIcon } from "@/components/icons";
import type { IconName } from "@/types/icon";

export function ContactAction({
  label,
  href,
  icon,
  external,
}: {
  label: string;
  href: string;
  icon: IconName;
  external?: boolean;
}) {
  const brand = icon === "github" ? "github" : icon === "linkedin" ? undefined : undefined;
  return (
    <a
      className="contact-action"
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {brand ? <BrandIcon brand={brand} size="action" /> : <AppIcon name={icon} size="action" />}
      <span>{label}</span>
    </a>
  );
}
