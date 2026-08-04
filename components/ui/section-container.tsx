export function SectionContainer({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section-container">
      {children}
    </section>
  );
}
