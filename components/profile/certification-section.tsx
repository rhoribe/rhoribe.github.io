"use client";
import { useMemo, useState } from "react";
import { AppIcon } from "@/components/icons";
import { certifications } from "@/content/certifications";
import { formatYearMonth } from "@/lib/dates";
const filters = [
  "All",
  "Cloud",
  "DevOps",
  "Linux",
  "Security",
  "Agile and Service Management",
  "Active",
  "Expired",
] as const;
const match = (name: string, c: (typeof certifications)[number]) =>
  name === "All" ||
  (name === "Active" && c.status === "active") ||
  (name === "Expired" && c.status === "expired") ||
  (name === "Cloud" &&
    c.categories.some((x) => ["aws-cloud", "azure", "infrastructure-as-code"].includes(x))) ||
  (name === "DevOps" && c.categories.includes("devops-cicd")) ||
  (name === "Linux" && c.categories.includes("linux")) ||
  (name === "Security" && c.categories.includes("network-security")) ||
  (name === "Agile and Service Management" &&
    c.categories.some((x) => ["agile", "service-management"].includes(x)));
export function CertificationSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = useMemo(() => certifications.filter((c) => match(filter, c)), [filter]);
  return (
    <>
      <fieldset className="filters">
        <legend>Browse certifications</legend>
        {filters.map((f) => (
          <label key={f}>
            <input
              type="radio"
              name="certifications"
              checked={filter === f}
              onChange={() => setFilter(f)}
            />
            {f}
          </label>
        ))}
      </fieldset>
      <p aria-live="polite">
        {shown.length} certification{shown.length === 1 ? "" : "s"}
      </p>
      <div className="grid">
        {shown.map((c) => (
          <article className="card certification" key={c.name}>
            <h3>
              <AppIcon name={c.icon ?? "certificate"} /> {c.name}
            </h3>
            <p>{c.issuer}</p>
            <p>
              Issued: <time dateTime={c.issuedDate}>{formatYearMonth(c.issuedDate)}</time>
            </p>
            {c.expirationDate && (
              <p>
                {c.status === "expired" ? "Expired" : "Expires"}:{" "}
                <time dateTime={c.expirationDate}>{formatYearMonth(c.expirationDate)}</time>
              </p>
            )}
            <p className={`status ${c.status}`}>
              {c.status === "no-expiration-provided"
                ? "No expiration information provided"
                : c.status === "active"
                  ? "Active"
                  : "Expired"}
            </p>
            {c.credentialId && <p className="credential-id">Credential ID: {c.credentialId}</p>}
            {c.skills && (
              <ul className="badges">
                {c.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            )}
            {c.credentialUrl && (
              <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer">
                View credential <AppIcon name="external-link" size="compact" />
              </a>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
