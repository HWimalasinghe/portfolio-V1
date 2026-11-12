import { ArrowUpRight, BookOpen } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { skillGroups } from "../data/skills";

export function StackSection() {
  return (
    <section id="stack" className="stack-section" aria-labelledby="stack-title">
      <div className="section-shell">
        <div className="section-heading-row">
          <FadeIn className="section-side-label section-side-label-light" y={18}>
            <span className="section-index">02</span>
            <span>TECHNICAL SKILLS</span>
          </FadeIn>
          <div className="stack-heading-copy">
            <FadeIn as="h2" id="stack-title" className="section-title section-title-light" y={24}>
              The tools behind<br /><span>the work.</span>
            </FadeIn>
            <FadeIn as="p" className="stack-intro" delay={0.08} y={18}>
              A growing technical toolkit covering frontend development, backend programming, databases, and software engineering.
            </FadeIn>
          </div>
        </div>

        <div className="stack-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <FadeIn as="article" key={group.number} className="stack-card" delay={(index % 3) * 0.06} y={22}>
                <div className="stack-card-top">
                  <span className="stack-icon"><Icon aria-hidden="true" size={21} strokeWidth={1.8} /></span>
                  <span className="stack-number">{group.number}</span>
                </div>
                <h3>{group.title}</h3>
                <p className="stack-card-description">{group.description}</p>
                <ul className="skill-list">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <ArrowUpRight className="stack-card-arrow" aria-hidden="true" size={19} />
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="learning-banner" y={18}>
          <span className="learning-icon"><BookOpen aria-hidden="true" size={20} /></span>
          <span><small>CURRENTLY LEARNING</small><strong>Next.js<br/> Node.js / Express.js</strong></span>
          <span className="learning-note">Continuing to grow in full-stack development</span>
        </FadeIn>
      </div>
    </section>
  );
}
