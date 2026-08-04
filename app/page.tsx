import { SiteHeader } from "@/components/layout/site-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";
import { expertise } from "@/content/expertise";
import { experience } from "@/content/experience";
import { certifications, education } from "@/content/credentials";
import { projects } from "@/content/projects";
const Card = ({ children }: { children: React.ReactNode }) => (
  <article className="card">{children}</article>
);
export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="hero">
          <p className="eyebrow">Site Reliability Engineering · DevOps</p>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p>{profile.intro}</p>
          <a className="button" href="#experience">
            View experience
          </a>
        </section>
        <section id="about">
          <SectionHeading>About</SectionHeading>
          <p>
            {profile.about} Ricardo focuses on operational excellence, scalability, availability,
            technical leadership, mentoring, and continuous improvement.
          </p>
        </section>
        <section id="expertise">
          <SectionHeading>Expertise</SectionHeading>
          <div className="grid">
            {expertise.map(([title, skills]) => (
              <Card key={title}>
                <h3>{title}</h3>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>
        <section id="experience">
          <SectionHeading>Professional experience</SectionHeading>
          <ol className="timeline">
            {experience.map((item) => (
              <li key={item.company + item.role}>
                <Card>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                  <p className="pending">Dates and details pending resume verification.</p>
                </Card>
              </li>
            ))}
          </ol>
        </section>
        <section id="credentials">
          <SectionHeading>Certifications</SectionHeading>
          <div className="grid">
            {certifications.map((item) => (
              <Card key={item}>
                <p>{item}</p>
              </Card>
            ))}
          </div>
          <SectionHeading>Education</SectionHeading>
          <div className="grid">
            {education.map((item) => (
              <Card key={item}>
                <p>{item}</p>
              </Card>
            ))}
          </div>
        </section>
        <section id="projects">
          <SectionHeading>Projects</SectionHeading>
          <div className="grid">
            {projects.map((project) => (
              <Card key={project.title}>
                <h3>{project.title}</h3>
                <p className="pending">Repository details are pending validation.</p>
              </Card>
            ))}
          </div>
        </section>
        <section id="contact">
          <SectionHeading>Contact</SectionHeading>
          <p>
            Professional contact details and resume download will be published after source
            verification.
          </p>
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Ricardo Horibe · Built with Next.js and TypeScript.</p>
        <a href="#main">Back to top</a>
      </footer>
    </>
  );
}
