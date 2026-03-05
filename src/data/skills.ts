import type { SkillCategory } from "../types/skill";

export const skills: SkillCategory[] = [
  {
    id: "backend",
    icon: "💻",
    title: "Backend",
    skills: ["Java", "Spring Boot", "REST API", "Microservices", "Hibernate"],
  },
  {
    id: "database",
    icon: "🗄️",
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    id: "devops",
    icon: "🚀",
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
  },
  {
    id: "frontend",
    icon: "🎨",
    title: "Frontend",
    skills: ["React", "TypeScript", "TailwindCSS", "HTML/CSS", "Vite"],
  },
  {
    id: "tools",
    icon: "🛠️",
    title: "Tools",
    skills: ["Git", "Jira", "Postman", "IntelliJ IDEA", "VS Code"],
  },
];
