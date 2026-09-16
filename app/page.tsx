export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold">
            HW<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-cyan-400">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen items-center px-6 pt-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Software Engineering Student
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Hi, I'm{" "}
              <span className="text-cyan-400">
                Harindu
              </span>
              .
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">
              I build modern web applications.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              I'm an Information Technology undergraduate interested in
              software engineering, full-stack development, backend systems,
              and modern web technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                View My Projects
              </a>

              <a
                href="https://github.com/HWimalasinghe"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            A developer who enjoys building things.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I'm currently pursuing a BSc (Hons) in Information Technology at
            the Sri Lanka Institute of Information Technology (SLIIT). I enjoy
            learning new technologies and turning ideas into practical
            software solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Technologies I work with
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SkillCard
              title="Frontend"
              skills="HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS"
            />

            <SkillCard
              title="Backend"
              skills="Node.js, Express.js, Java, Spring Boot, REST APIs"
            />

            <SkillCard
              title="Database"
              skills="MySQL, MongoDB, H2"
            />

            <SkillCard
              title="Tools"
              skills="Git, GitHub, Maven, Postman"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Some things I've built
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="RideLink"
              description="A service-based ride management system built with Spring Boot and REST APIs."
              technologies="Java • Spring Boot • REST API • H2 • Maven"
            />

            <ProjectCard
              title="CeylonGuide"
              description="A tourism platform designed to connect tourists with guides and related services."
              technologies="Java • Spring Boot • MySQL • REST API"
            />

            <ProjectCard
              title="MERN Item Manager"
              description="A full-stack web application for managing products and users."
              technologies="MongoDB • Express.js • React • Node.js"
            />

            <ProjectCard
              title="Secure Client-Server System"
              description="A client-server communication system implementing authentication and secure session management."
              technologies="C • Python • Socket Programming • TCP/IP"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Professional Experience
          </h2>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm text-cyan-400">
              Software Engineering Intern
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Lead Innovationz (Pvt) Ltd
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Internship experience involving software engineering,
              application development, and working with modern development
              technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
            Let's build something together.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            I'm always interested in learning, collaborating, and working on
            interesting software projects.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="mailto:hirumalwimalasinghe123@gmail.com"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              Email Me
            </a>

            <a
              href="https://github.com/HWimalasinghe"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Harindu Wimalasinghe. All rights reserved.
      </footer>
    </main>
  );
}

function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50">
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-4 leading-7 text-gray-400">
        {skills}
      </p>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  technologies,
}: {
  title: string;
  description: string;
  technologies: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-cyan-400/50">
      <h3 className="text-2xl font-bold group-hover:text-cyan-400">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {description}
      </p>

      <p className="mt-6 text-sm text-cyan-400">
        {technologies}
      </p>
    </div>
  );
}