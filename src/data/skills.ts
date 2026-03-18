import type { SkillCategory } from "../types/skill";

export const skills: SkillCategory[] = [
  {
    id: "programming languages",
    icon: "🖥️",
    title: "Programming Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    id: "Fundamental Concepts",
    icon: "📚",
    title: "Fundamental Concepts",
    skills: [
      "Object-Oriented Programming (OOP)",
      "Data Structures and Algorithms",
      "SOLID Principles",
    ],
  },
  {
    id: "backend",
    icon: "💻",
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "JWT",
      "Hibernate",
      "REST API",
      "Microservices (basic knowledge)",
      "Apache Kafka (basic knowledge)",
      "WebSocket (basic knowledge)",
    ],
  },
  {
    id: "database",
    icon: "🗄️",
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MS SQL Server", "Redis"],
  },
  {
    id: "devops",
    icon: "🚀",
    title: "DevOps",
    skills: ["Docker", "Ubuntu"],
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
