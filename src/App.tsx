import { AboutSection } from "./sections/AboutSection";
import { ClosingSection } from "./sections/ClosingSection";
import { HeroSection } from "./sections/HeroSection";
import { InterestsSection } from "./sections/InterestsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { StackSection } from "./sections/StackSection";

export default function App() {
  return (
    <main className="site-shell" id="top">
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <InterestsSection />
      <ClosingSection />
    </main>
  );
}
