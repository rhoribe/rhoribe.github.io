export function Accordion({ summary, children }: { summary: string; children: React.ReactNode }) {
  return (
    <details className="accordion">
      <summary>{summary}</summary>
      {children}
    </details>
  );
}
