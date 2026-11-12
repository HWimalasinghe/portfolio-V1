import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

const contacts = [
  { label: "Email", value: "hirumalwimalasinghe123@gmail.com", href: "mailto:hirumalwimalasinghe123@gmail.com", icon: Mail },
  { label: "Phone", value: "+94 74 071 5866", href: "tel:+94740715866", icon: Phone },
  { label: "LinkedIn", value: "www.linkedin.com/in/harindu-wimalasinghe-160750211/", href: "https://www.linkedin.com/in/harindu-wimalasinghe-160750211/", icon: Linkedin, external: true },
  { label: "GitHub", value: "github.com/HWimalasinghe", href: "https://github.com/HWimalasinghe", icon: Github, external: true },
];

export function ClosingSection() {
  return (
    <footer id="contact" className="closing-section contact-section">
      <div className="section-shell closing-inner">
        <FadeIn className="closing-mark" y={16}>
          <span>05 / CONTACT</span>
          <span className="internship-status">SEEKING AN INTERNSHIP</span>
        </FadeIn>
        <FadeIn as="h2" className="closing-title" delay={0.06} y={22}>
          Let’s talk<br /><span>about building.</span>
        </FadeIn>
        <FadeIn as="p" className="contact-goal" delay={0.1} y={14}>
          I'm currently seeking a Software Engineering or Full-Stack Development Internship where I can contribute to 
          real-world projects, strengthen my technical skills, and grow as a software developer.
        </FadeIn>

        <div className="contact-grid">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <FadeIn as="a" key={contact.label} className="contact-card" href={contact.href} delay={index * 0.05} y={14} {...(contact.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                <span className="contact-icon"><Icon aria-hidden="true" size={18} /></span>
                <span className="contact-copy"><small>{contact.label}</small><strong>{contact.value}</strong></span>
                <ArrowUpRight aria-hidden="true" className="contact-arrow" size={18} />
              </FadeIn>
            );
          })}
        </div>

        <div className="closing-bottom contact-bottom">
          <p>Harindu Hirumal Wimalasinghe<br />Information Technology Undergraduate · SLIIT</p>
          <a className="back-to-top" href="#top">Back to top <ArrowUpRight aria-hidden="true" size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
