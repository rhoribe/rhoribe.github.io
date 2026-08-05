import { SiteHeader } from "@/components/layout/site-header";
import { AnimatedSection } from "@/components/motion/animated-section";
import { AnimatedText } from "@/components/motion/animated-text";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { InfrastructureNodes } from "@/components/visuals/infrastructure-nodes";
import { SectionHeading } from "@/components/ui/section-heading";
import { AppIcon, TechnologyIcon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { ContactAction } from "@/components/ui/contact-action";
import { ExperienceTimeline } from "@/components/profile/experience-timeline";
import { CertificationSection } from "@/components/profile/certification-section";
import { profile } from "@/content/profile";
import { expertise } from "@/content/expertise";
import { education } from "@/content/credentials";
import { contactLinks } from "@/content/contact";
import { publishableProjects } from "@/content/projects";
export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <AnimatedText delay={0.02}>
              <p className="eyebrow">Site Reliability Engineering · Cloud · DevOps</p>
            </AnimatedText>
            <AnimatedText delay={0.08}>
              <h1 id="hero-title">{profile.name}</h1>
            </AnimatedText>
            <AnimatedText delay={0.14}>
              <p className="headline">{profile.headline}</p>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p>{profile.intro}</p>
              <p>{profile.technologyLine}</p>
            </AnimatedText>
            <AnimatedText delay={0.26}>
              <p className="status">
                <AppIcon name="reliability" size="compact" /> More than 15 years in technology
              </p>
              <a className="button" href="#experience">
                <AppIcon name="experience" size="compact" /> View experience <b aria-hidden>→</b>
              </a>
              <a className="hero-contact" href="#contact">
                Start a conversation <span aria-hidden>→</span>
              </a>
            </AnimatedText>
          </div>
          <InfrastructureNodes />
        </section>
        <AnimatedSection id="about" className="section-container">
          <SectionHeading>About</SectionHeading>
          {profile.about.map((p) => (
            <p className="prose" key={p}>
              {p}
            </p>
          ))}
          <h3>Core expertise</h3>
          <StaggerContainer className="grid">
            {expertise.map(([title, skills]) => (
              <Card key={title}>
                <h4>
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
                </h4>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </StaggerContainer>
          <h3>Leadership</h3>
          <p>{profile.leadership}</p>
          <h3>Career objective</h3>
          <p>{profile.objective}</p>
        </AnimatedSection>
        <AnimatedSection id="experience" className="section-container">
          <SectionHeading>Professional experience</SectionHeading>
          <ExperienceTimeline />
        </AnimatedSection>
        <AnimatedSection id="credentials" className="section-container">
          <SectionHeading>Certifications</SectionHeading>
          <CertificationSection />
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
        {publishableProjects.length > 0 && (
          <AnimatedSection id="projects" className="section-container">
            <SectionHeading>Projects</SectionHeading>
            <div className="grid">
              {publishableProjects.map((project) => (
                <Card key={project.title}>
                  <h3>
                    <AppIcon name="projects" /> {project.title}
                  </h3>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        )}
        <AnimatedSection id="contact" className="section-container">
          <SectionHeading>Contact</SectionHeading>
          <ul className="contact-links" aria-label="Contact methods">
            {contactLinks.map((link) => (
              <li key={link.href}>
                <ContactAction {...link} />
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </main>
      <footer>
        <p className="footer-copy">
          © {new Date().getFullYear()} Ricardo Horibe · Built with{" "}
          <span className="technology-group">
            <TechnologyIcon technology="nextjs" /> Next.js
          </span>{" "}
          and{" "}
          <span className="technology-group">
            <TechnologyIcon technology="typescript" /> TypeScript
          </span>
          .
        </p>
        <a className="footer-top" href="#main">
          <AppIcon name="home" size="compact" /> Back to top ↑
        </a>
      </footer>
    </>
  );
}
