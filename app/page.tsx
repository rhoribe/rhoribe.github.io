import { SiteHeader } from "@/components/layout/site-header";
import { AnimatedSection } from "@/components/motion/animated-section";
import { AnimatedText } from "@/components/motion/animated-text";
import { InteractiveCard } from "@/components/motion/interactive-card";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { InfrastructureNodes } from "@/components/visuals/infrastructure-nodes";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";
import { expertise } from "@/content/expertise";
import { experience } from "@/content/experience";
import { certifications, education } from "@/content/credentials";
import { projects } from "@/content/projects";
const Card = ({ children, tilt = false }: { children: React.ReactNode; tilt?: boolean }) => (
  <InteractiveCard tilt={tilt}>{children}</InteractiveCard>
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
          <div className="hero-copy">
            <AnimatedText delay={0.02}>
              <p className="eyebrow">Site Reliability Engineering · DevOps</p>
            </AnimatedText>
            <AnimatedText delay={0.08}>
              <h1>{profile.name}</h1>
            </AnimatedText>
            <AnimatedText delay={0.14}>
              <p className="headline">{profile.headline}</p>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p>{profile.intro}</p>
            </AnimatedText>
            <AnimatedText delay={0.26}>
              <p className="status">
                <span aria-hidden />
                Building resilient cloud platforms
              </p>
              <a className="button" href="#experience">
                View experience <b aria-hidden>→</b>
              </a>
            </AnimatedText>
          </div>
          <InfrastructureNodes />
        </section>
        <AnimatedSection id="about">
          <SectionHeading>About</SectionHeading>
          <p>
            {profile.about} Ricardo focuses on operational excellence, scalability, availability,
            technical leadership, mentoring, and continuous improvement.
          </p>
        </AnimatedSection>
        <AnimatedSection id="expertise">
          <SectionHeading>Expertise</SectionHeading>
          <StaggerContainer className="grid">
            {expertise.map(([title, skills]) => (
              <Card key={title} tilt>
                <h3>{title}</h3>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </StaggerContainer>
        </AnimatedSection>
        <AnimatedSection id="experience">
          <SectionHeading>Professional experience</SectionHeading>
          <ScrollProgress>
            {experience.map((item) => (
              <li key={item.company + item.role}>
                <Card>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                  <p className="pending">Dates and details pending resume verification.</p>
                </Card>
              </li>
            ))}
          </ScrollProgress>
        </AnimatedSection>
        <AnimatedSection id="credentials">
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
        </AnimatedSection>
        <AnimatedSection id="projects">
          <SectionHeading>Projects</SectionHeading>
          <div className="grid">
            {projects.map((project) => (
              <Card key={project.title}>
                <h3>{project.title}</h3>
                <p className="pending">Repository details are pending validation.</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection id="contact">
          <SectionHeading>Contact</SectionHeading>
          <p>
            Professional contact details and resume download will be published after source
            verification.
          </p>
        </AnimatedSection>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Ricardo Horibe · Built with Next.js and TypeScript.</p>
        <a href="#main">Back to top ↑</a>
      </footer>
    </>
  );
}
