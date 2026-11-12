import { Braces, Code2, Database, Layers3, Server, Terminal, type LucideIcon } from "lucide-react";

export type SkillGroup = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive and interactive user interfaces",
    icon: Code2,
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Developing server-side functionality and application logic",
    icon: Server,
    items: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "JSP", "Java Servlets"],
  },
  {
    number: "03",
    title: "Databases",
    description: "Relational and document data stores",
    icon: Database,
    items: ["MySQL", "MongoDB"],
  },
  {
    number: "04",
    title: "Programming Languages",
    description: "Languages used across academic and web development projects",
    icon: Braces,
    items: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    number: "05",
    title: "Developer Tools",
    description: "Tools supporting development, testing, and collaboration",
    icon: Terminal,
    items: ["Git", "GitHub", "Postman", "Maven", "VS Code", "AI-Assisted Development"],
  },
  {
    number: "06",
    title: "Software Development Concepts",
    description: "Understanding application structure, integration, and development practices",
    icon: Layers3,
    items: ["MVC Architecture", "Layered Architecture", "DB Design", "Object-Oriented Programming", "API Integration", "Version Control"],
  },
];

export const interests = ["REST APIs", "Microservices", "AI/ML"];
