import type { IconType } from "react-icons";
import {
  FaJava,
  FaDocker,
  FaAws,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCubes,
  FaArrowsRotate,
} from "react-icons/fa6";
import {
  SiSpringboot,
  SiHibernate,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiElasticsearch,
  SiKubernetes,
  SiTerraform,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiJira,
  SiPostman,
  SiIntellijidea,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import Card from "../../components/ui/Card";
import type { SkillCategory } from "../../types/skill";
import { BiLogoVisualStudio } from "react-icons/bi";

const skillIcons: Record<string, IconType> = {
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  "REST API": MdApi,
  Microservices: FaCubes,
  Hibernate: SiHibernate,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Elasticsearch: SiElasticsearch,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  AWS: FaAws,
  "CI/CD": FaArrowsRotate,
  Terraform: SiTerraform,
  React: FaReact,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  "HTML/CSS": FaHtml5,
  Vite: SiVite,
  Git: FaGitAlt,
  Jira: SiJira,
  Postman: SiPostman,
  "IntelliJ IDEA": SiIntellijidea,
  "VS Code": BiLogoVisualStudio,
};

interface SkillCardProps {
  skill: SkillCategory;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="h-full hover:shadow-xl">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl dark:bg-emerald-950/30">
          {skill.icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          {skill.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.skills.map((item) => {
          const Icon = skillIcons[item];
          return (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-bold text-slate-700 transition-colors hover:border-emerald-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {Icon && <Icon className="text-base" />}
              {item}
            </span>
          );
        })}
      </div>
    </Card>
  );
}

export default SkillCard;
