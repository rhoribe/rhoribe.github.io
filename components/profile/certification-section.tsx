import { Card } from "@/components/ui/card";
import { IssuerLogo } from "@/components/ui/issuer-logo";
import { certifications } from "@/content/certifications";

export function CertificationSection() {
  return (
    <div className="certification-gallery" aria-label="Certification gallery">
      {certifications.map((certification) => (
        <Card className="certification" key={certification.name}>
          <IssuerLogo brand={certification.issuerBrand} />
          <div>
            <p className="issuer-name">{certification.issuer}</p>
            <h3>{certification.name}</h3>
          </div>
        </Card>
      ))}
    </div>
  );
}
