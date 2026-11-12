import { ArrowUpRight, Braces, Layers3, Sparkles } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { interests } from "../data/skills";

const interestDetails = [
  { label: interests[0], detail: "Interested in designing and integrating reliable APIs that connect frontend applications with backend services.", icon: Braces },
  { label: interests[1], detail: "Exploring distributed application architecture, service communication, and independent service development.", icon: Layers3 },
  { label: interests[2], detail: "Interested in artificial intelligence and machine learning, and exploring how these technologies can enhance modern applications.", icon: Sparkles },
];

export function InterestsSection() {
  return (
    <section id="interests" className="interests-section" aria-labelledby="interests-title">
      <div className="section-shell">
        <div className="interests-heading-row">
          <FadeIn className="section-side-label" y={18}>
            <span className="section-index">04</span>
            <span>AREAS OF INTEREST</span>
          </FadeIn>
          <div>
            <FadeIn as="h2" id="interests-title" className="section-title" y={24}>
              Curious about<br /><span className="title-accent">what connects.</span>
            </FadeIn>
            <FadeIn as="p" className="interests-intro" delay={0.08} y={18}>
              Topics I’m interested in exploring as I continue learning and building.
            </FadeIn>
          </div>
        </div>

        <div className="interest-list">
          {interestDetails.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <FadeIn as="article" key={interest.label} className="interest-row" delay={index * 0.08} y={16}>
                <span className="interest-row-icon"><Icon aria-hidden="true" size={22} strokeWidth={1.8} /></span>
                <h3>{interest.label}</h3>
                <p>{interest.detail}</p>
                <ArrowUpRight aria-hidden="true" className="interest-arrow" size={20} />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
