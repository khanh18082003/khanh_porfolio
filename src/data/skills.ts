import type { SkillCategory } from "../types/skill";

export const skills: SkillCategory[] = [
  {
    id: "backend",
    icon: "💻",
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "JWT",
      "Hibernate",
      "REST API",
      "Microservices (basic knowledge)",
    ],
  },
  {
    id: "database",
    icon: "🗄️",
    title: "Database",
    skills: ["MySQL", "MS SQL Server", "MongoDB", "Redis"],
  },
  {
    id: "devops",
    icon: "🚀",
    title: "DevOps",
    skills: ["Docker", "CI/CD", "Ubuntu/Linux"],
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
    skills: ["Git", "Postman", "Swagger", "IntelliJ IDEA", "VS Code"],
  },
  // {
  //   id: "AI",
  //   icon: "🤖",
  //   title: "AI",
  //   skills: [
  //     "Python",
  //     "TensorFlow",
  //     "PyTorch",
  //     "scikit-learn",
  //     "GitHub Copilot",
  //   ],
  // },
];
