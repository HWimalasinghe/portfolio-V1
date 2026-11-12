import { ArrowUpRight, Code2 } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { projects } from "../data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="section-shell">
        <div className="section-heading-row projects-heading-row">
          <FadeIn className="section-side-label" y={18}>
            <span className="section-index">03</span>
            <span>ACADEMIC PROJECTS</span>
          </FadeIn>
          <div>
            <FadeIn as="h2" id="projects-title" className="section-title" y={24}>
              Built through<br /><span className="title-accent">practice.</span>
            </FadeIn>
            <FadeIn as="p" className="projects-intro" delay={0.08} y={18}>
              A selection of academic projects demonstrating my experience with full-stack development, backend programming, 
              booking workflows, and database integration.
            </FadeIn>
          </div>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <FadeIn as="article" key={project.number} className="project-card" delay={index * 0.08} y={22}>
              <div className="project-card-heading">
                <span className="project-number">{project.number}</span>
                <span className="project-type"><Code2 aria-hidden="true" size={15} /> ACADEMIC PROJECT</span>
              </div>
              <div className="project-card-content">
                <div className="project-overview">
                  <h3>{project.name}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-summary">{project.summary}</p>
                  <ul className="project-tech-list" aria-label={`${project.name} technology stack`}>
                    {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </div>
                <ul className="project-features">
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </div>
              <ArrowUpRight className="project-corner-arrow" aria-hidden="true" size={21} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
