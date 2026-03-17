import type { IconType } from "react-icons";
import {
  FaJava,
  FaDocker,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCubes,
  FaArrowsRotate,
  FaPython,
} from "react-icons/fa6";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiJira,
  SiPostman,
  SiIntellijidea,
  SiJsonwebtokens,
  SiUbuntu,
  SiSwagger,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import type { SkillCategory } from "../../types/skill";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  Java: { icon: FaJava, color: "text-blue-500" },
  "Spring Boot": { icon: SiSpringboot, color: "text-green-500" },
  "Spring Security": { icon: SiSpringsecurity, color: "text-green-600" },
  "Spring Data JPA": { icon: SiHibernate, color: "text-amber-600" },
  Hibernate: { icon: SiHibernate, color: "text-red-500" },
  "REST API": { icon: MdApi, color: "text-yellow-500" },
  "Microservices (basic knowledge)": {
    icon: FaCubes,
    color: "text-purple-500",
  },
  JWT: { icon: SiJsonwebtokens, color: "text-pink-500" },
  "MS SQL Server": { icon: DiMsqlServer, color: "text-red-600" },
  MySQL: { icon: SiMysql, color: "text-blue-600" },
  MongoDB: { icon: SiMongodb, color: "text-green-700" },
  Redis: { icon: SiRedis, color: "text-red-700" },
  Docker: { icon: FaDocker, color: "text-blue-400" },
  "CI/CD": { icon: FaArrowsRotate, color: "text-green-400" },
  "Ubuntu/Linux": { icon: SiUbuntu, color: "text-orange-500" },
  React: { icon: FaReact, color: "text-blue-300" },
  TypeScript: { icon: SiTypescript, color: "text-blue-600" },
  TailwindCSS: { icon: SiTailwindcss, color: "text-blue-400" },
  "HTML/CSS": { icon: FaHtml5, color: "text-orange-400" },
  Vite: { icon: SiVite, color: "text-yellow-500" },
  Git: { icon: FaGitAlt, color: "text-orange-500" },
  Jira: { icon: SiJira, color: "text-blue-500" },
  Swagger: { icon: SiSwagger, color: "text-green-500" },
  Postman: { icon: SiPostman, color: "text-orange-500" },
  "IntelliJ IDEA": { icon: SiIntellijidea, color: "text-blue-500" },
  "VS Code": { icon: BiLogoVisualStudio, color: "text-blue-400" },
  Python: { icon: FaPython, color: "text-yellow-500" },
};

interface SkillCardProps {
  skill: SkillCategory;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-200/60 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-slate-700">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xl">{skill.icon}</span>
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
          {skill.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {skill.skills.map((item) => {
          const entry = skillIcons[item];
          const Icon = entry?.icon;
          const color = entry?.color ?? "text-slate-500";
          return (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-100 bg-slate-50/80 px-2.5 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400 dark:hover:border-blue-800 dark:hover:text-blue-400"
            >
              {Icon && <Icon className={`text-xs ${color}`} />}
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default SkillCard;
