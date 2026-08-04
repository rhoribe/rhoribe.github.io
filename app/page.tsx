import { SiteHeader } from "@/components/layout/site-header";
import { AnimatedSection } from "@/components/motion/animated-section";
import { AnimatedText } from "@/components/motion/animated-text";
import { InteractiveCard } from "@/components/motion/interactive-card";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { InfrastructureNodes } from "@/components/visuals/infrastructure-nodes";
import { SectionHeading } from "@/components/ui/section-heading";
import { AppIcon, IconBadge, TechnologyIcon } from "@/components/icons";
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
                <span aria-hidden /> <AppIcon name="reliability" size="compact" />
                Building resilient cloud platforms
              </p>
              <a className="button" href="#experience">
                <AppIcon name="experience" size="compact" /> View experience <b aria-hidden>→</b>
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
          <div className="icon-row" aria-label="Professional highlights">
            <IconBadge>
              <AppIcon name="experience" />
            </IconBadge>
            <IconBadge>
              <AppIcon name="leadership" />
            </IconBadge>
            <IconBadge>
              <AppIcon name="reliability" />
            </IconBadge>
            <IconBadge>
              <AppIcon name="automation" />
            </IconBadge>
          </div>
        </AnimatedSection>
        <AnimatedSection id="expertise">
          <SectionHeading>Expertise</SectionHeading>
          <StaggerContainer className="grid">
            {expertise.map(([title, skills]) => (
              <Card key={title} tilt>
                <h3>
                  <AppIcon
                    name={
                      title.includes("Cloud")
                        ? "cloud"
                        : title.includes("Containers")
                          ? "containers"
                          : title.includes("Observability")
                            ? "observability"
                            : title.includes("CI")
                              ? "cicd"
                              : "reliability"
                    }
                  />{" "}
                  {title}
                </h3>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill}>
                      {[
                        "Kubernetes",
                        "Docker",
                        "Terraform",
                        "Prometheus",
                        "Grafana",
                        "Datadog",
                        "Linux",
                        "Jenkins",
                        "GitLab CI/CD",
                      ].includes(skill) ? (
                        <TechnologyIcon
                          technology={
                            skill === "GitLab CI/CD"
                              ? "gitlab"
                              : (skill.toLowerCase() as "kubernetes")
                          }
                          size="compact"
                        />
                      ) : null}{" "}
                      {skill}
                    </li>
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
                  <h3>
                    <AppIcon name={item.roleIcon ?? "experience"} /> {item.role}
                  </h3>
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
                <p>
                  <AppIcon name={item.includes("AWS") ? "cloud" : "certificate"} /> {item}
                </p>
              </Card>
            ))}
          </div>
          <SectionHeading>Education</SectionHeading>
          <div className="grid">
            {education.map((item) => (
              <Card key={item}>
                <p>
                  <AppIcon name="education" /> {item}
                </p>
              </Card>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection id="projects">
          <SectionHeading>Projects</SectionHeading>
          <div className="grid">
            {projects.map((project) => (
              <Card key={project.title}>
                <h3>
                  <AppIcon name="projects" /> {project.title}
                </h3>
                <p className="pending">Repository details are pending validation.</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection id="contact">
          <SectionHeading>Contact</SectionHeading>
          <p>
            <AppIcon name="email" />
            Professional contact details and resume download will be published after source
            verification.
          </p>
        </AnimatedSection>
      </main>
      <footer>
        <p>
          © {new Date().getFullYear()} Ricardo Horibe · Built with{" "}
          <TechnologyIcon technology="nextjs" /> Next.js and{" "}
          <TechnologyIcon technology="typescript" /> TypeScript.
        </p>
        <a href="#main">
          <AppIcon name="home" size="compact" /> Back to top ↑
        </a>
      </footer>
    </>
  );
}
