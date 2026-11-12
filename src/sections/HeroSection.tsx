import { ArrowDownRight, ArrowUpRight, Code2 } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Harindu Wimalasinghe portfolio home">
          <span className="brand-mark" aria-hidden="true"><Code2 size={22} strokeWidth={2.1} /></span>
          <span className="brand-wordmark">HARINDU<span>/DEV</span></span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <FadeIn className="hero-eyebrow" y={16}>
            <span className="eyebrow-dot" aria-hidden="true" />
            Information Technology Undergraduate · SLIIT
          </FadeIn>

          <FadeIn as="h1" id="hero-title" className="hero-title" delay={0.08} y={28}>
            <span>Full-Stack</span>
            <span>Software</span>
            <span className="hero-title-accent">Developer</span>
          </FadeIn>

          <FadeIn as="p" className="hero-name" delay={0.12} y={16}>
            Harindu Hirumal Wimalasinghe
          </FadeIn>

          <FadeIn as="p" className="hero-summary" delay={0.16} y={20}>
            {/* Information Technology undergraduate at SLIIT with hands-on experience developing
            full-stack web applications using React.js, Java, Spring Boot, REST APIs, and MySQL. */}
            Information Technology undergraduate at SLIIT with practical experience building full-stack web 
            applications using React.js, Java, Spring Boot, REST APIs, and relational databases. Interested in 
            developing scalable software solutions, building user-focused applications, and continuously 
            improving my software engineering skills.
          </FadeIn>

          <FadeIn className="hero-actions" delay={0.22} y={16}>
            <a className="button button-primary" href="#projects">
              View academic projects <ArrowDownRight aria-hidden="true" size={18} />
            </a>
            <a className="button button-secondary" href="#contact">
              Contact me <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </FadeIn>

          <FadeIn className="hero-footnote" delay={0.3} y={12}>
            <span>INTERNSHIP GOAL</span>
            <span>Software Engineering · Full-Stack Development</span>
          </FadeIn>
        </div>

        <FadeIn className="code-card-wrap" delay={0.18} y={28}>
          <div className="code-card" aria-label="Code-inspired summary of Harindu’s academic and full-stack development profile">
            <div className="code-card-topbar">
              <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
              <span className="code-file-label">harindu.profile</span>
              <span className="code-language">TS</span>
            </div>
            {/* <div className="code-card-body" aria-hidden="true">
              <div className="code-line"><span className="line-number">01</span><code><span className="token-keyword">const</span> profile <span className="token-operator">=</span> <span className="token-brace">&#123;</span></code></div>
              <div className="code-line"><span className="line-number">02</span><code><span className="code-indent" /><span className="token-property">degree</span>: <span className="token-string">&quot;BSc (Hons) IT · SLIIT&quot;</span>,</code></div>
              <div className="code-line"><span className="line-number">03</span><code><span className="code-indent" /><span className="token-property">focus</span>: <span className="token-string">&quot;Full-Stack Web Apps&quot;</span>,</code></div>
              <div className="code-line"><span className="line-number">04</span><code><span className="code-indent" /><span className="token-property">frontend</span>: [<span className="token-string">&quot;React.js&quot;</span>, <span className="token-string">&quot;JavaScript&quot;</span>],</code></div>
              <div className="code-line"><span className="line-number">05</span><code><span className="code-indent" /><span className="token-property">backend</span>: [<span className="token-string">&quot;Java&quot;</span>, <span className="token-string">&quot;Spring Boot&quot;</span>],</code></div>
              <div className="code-line"><span className="line-number">06</span><code><span className="code-indent" /><span className="token-property">database</span>: [<span className="token-string">&quot;MySQL&quot;</span>, <span className="token-string">&quot;MongoDB&quot;</span>],</code></div>
              <div className="code-line"><span className="line-number">07</span><code><span className="code-indent" /><span className="token-property">nextStep</span>: <span className="token-string">&quot;Internship&quot;</span>,</code></div>
              <div className="code-line"><span className="line-number">08</span><code><span className="token-brace">&#125;</span></code></div>
            </div> */}
            <div className="code-card-body" aria-hidden="true">
              <div className="code-line"><span className="line-number">01</span><code><span className="token-keyword">const</span> profile <span className="token-operator">=</span> <span className="token-brace">&#123;</span></code></div>
              <div className="code-line"><span className="line-number">02</span><code><span className="code-indent" /><span className="token-property">degree</span>: <span className="token-string">&quot;BSc (Hons) IT · SLIIT&quot;</span>,</code></div>
              <div className="code-line"><span className="line-number">03</span><code><span className="code-indent" /><span className="token-property">focus</span>: <span className="token-string">&quot;Full-Stack Development&quot;</span>,</code></div>
              <div className="code-line"><span className="line-number">04</span><code><span className="code-indent" /><span className="token-property">frontend</span>: [<span className="token-string">&quot;React.js&quot;</span>, <span className="token-string">&quot;JavaScript&quot;</span>, <span className="token-string">&quot;Tailwind CSS&quot;</span>],</code></div>
              <div className="code-line"><span className="line-number">05</span><code><span className="code-indent" /><span className="token-property">backend</span>: [<span className="token-string">&quot;Java&quot;</span>, <span className="token-string">&quot;Spring Boot&quot;</span>, <span className="token-string">&quot;REST APIs&quot;</span>],</code></div>
              <div className="code-line"><span className="line-number">06</span><code><span className="code-indent" /><span className="token-property">database</span>: [<span className="token-string">&quot;MySQL&quot;</span>, <span className="token-string">&quot;MongoDB&quot;</span>],</code></div>
              <div className="code-line"><span className="line-number">07</span><code><span className="code-indent" /><span className="token-property">nextStep</span>: <span className="token-string">&quot;Software Engineering Internship&quot;</span>,</code></div>
              <div className="code-line"><span className="line-number">08</span><code><span className="token-brace">&#125;</span></code></div>
            </div>
            <div className="code-card-bottom">
              <span><i className="online-dot" /> INFORMATION TECHNOLOGY · SLIIT</span>
              <span>2024—2028</span>
            </div>
          </div>
          <div className="code-orbit orbit-one" aria-hidden="true">&lt;/&gt;</div>
          <div className="code-orbit orbit-two" aria-hidden="true">{ }</div>
        </FadeIn>
      </section>
    </>
  );
}
