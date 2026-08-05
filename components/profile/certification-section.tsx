import { certifications } from "@/content/certifications";
import { CertificationCard } from "./certification-card";

export function CertificationSection() {
  return (
    <div className="certification-gallery" aria-label="Certification gallery">
      {certifications.map((certification) => (
        <CertificationCard certification={certification} key={certification.name} />
      ))}
    </div>
  );
}
