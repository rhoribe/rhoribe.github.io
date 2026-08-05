import { IssuerLogo } from "@/components/ui/issuer-logo";
import { Card } from "@/components/ui/card";
import type { Certification } from "@/types/certification";

export function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <Card className="certification" data-certification-card>
      <IssuerLogo brand={certification.issuerBrand} />
      <div>
        <p className="issuer-name">{certification.issuer}</p>
        <h3>{certification.name}</h3>
      </div>
    </Card>
  );
}
