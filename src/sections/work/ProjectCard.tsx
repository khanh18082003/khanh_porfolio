import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-slate-700">
      <div
        className={`grid grid-cols-1 lg:grid-cols-5 ${isReversed ? "lg:direction-rtl" : ""}`}
      >
        {/* Image */}
        <div className={`lg:col-span-2 ${isReversed ? "lg:order-2" : ""}`}>
          <img
            alt={project.title}
            className="aspect-video h-full w-full object-cover lg:aspect-auto lg:min-h-[280px]"
            loading="lazy"
            src={
              project.image === ""
                ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAHNfBU0X0PyUm4cJP9TXdejBZn0QQgenqSlOKsyNyrVvoJ8vJfu0xPpUdTf0eI0zyd71Hv7e7twCnvYYIRiVeaWgX4KE_xt7QUNmHfxiTq8X9pnsAg8StuCgAU8nF2jh9wL42dhleDFal5J28IAgvhhzMDx8e8TVl9qISZQx3ltBn-3riGpXpeYPIWEnfYv2gxPQuea5l_bWyXRQqln61SG8hKiW_xeQMmYP_IUO4imRZfBIPQ5301b5jxAOf-Ih5q5SX9eMDMLdSh"
                : project.image
            }
          />
        </div>

        {/* Content */}
        <div
          className={`flex flex-col justify-center gap-4 p-6 lg:col-span-3 lg:p-8 ${isReversed ? "lg:order-1" : ""}`}
        >
          <div>
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-100">
              {project.title}
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              variant="secondary"
            >
              <FaGithub size={14} />
              <span>Source</span>
            </Button>
            <Button
              as="a"
              href={project.demoUrl}
              target="_blank"
              variant="primary"
            >
              <FiExternalLink size={14} />
              <span>Demo</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
