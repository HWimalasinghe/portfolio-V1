import { ArrowDownRight, GraduationCap, PanelsTopLeft } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

const practiceSkills = [
  {
    title: "Problem Solving",
    description: "Approaching development challenges logically and working towards practical software solutions.",
  },
  {
    title: "Continuous Learning",
    description: "Expanding my knowledge of modern frameworks, backend technologies, and software engineering practices.",
  },
  {
    title: "Teamwork & Version Control",
    description: "Collaborating on development projects using Git and GitHub, with an emphasis on maintainable code and effective teamwork.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="section-shell about-grid">
        <FadeIn className="section-side-label" y={18}>
          <span className="section-index">01</span>
          <span>PROFILE</span>
        </FadeIn>

        <div className="about-main">
          <FadeIn as="h2" id="about-title" className="section-title" y={24}>
            Building ideas<br />into applications.
          </FadeIn>
          <FadeIn as="p" className="about-copy" delay={0.08} y={18}>
            I'm an Information Technology undergraduate at SLIIT passionate about software 
            development and building practical web applications. Through academic and personal 
            projects, I've gained experience in frontend development, backend programming, REST API integration, 
            database management, and application design.<br/>

            I enjoy solving technical problems, exploring new technologies, 
            and turning requirements into functional software solutions. 
            I'm continuously developing my skills through hands-on projects and collaborative development.
          </FadeIn>

          <FadeIn className="education-card" delay={0.12} y={18}>
            <span className="education-icon"><GraduationCap aria-hidden="true" size={22} /></span>
            <span className="education-copy">
              <span className="focus-label">EDUCATION · SLIIT</span>
              <strong>BSc (Hons) in Information Technology</strong>
              <span>Specialization: Information Technology</span>
            </span>
            <span className="education-dates">2024—2028</span>
          </FadeIn>

          <FadeIn className="focus-card" id="focus" delay={0.16} y={18}>
            <span className="focus-icon"><PanelsTopLeft aria-hidden="true" size={21} /></span>
            <span className="focus-copy">
              <span className="focus-label">MAIN FOCUS</span>
              <strong>Web Application Development</strong>
            </span>
            <ArrowDownRight aria-hidden="true" className="focus-arrow" size={22} />
          </FadeIn>

          <div className="practice-grid" aria-label="Skills in practice">
            {practiceSkills.map((item, index) => (
              <FadeIn as="article" key={item.title} className="practice-item" delay={index * 0.06} y={14}>
                <span className="practice-marker" aria-hidden="true">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
