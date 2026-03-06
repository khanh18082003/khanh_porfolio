import { FaGithub } from "react-icons/fa6";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0 hover:scale-[1.02]">
      <img
        alt={project.title}
        className="aspect-video w-full object-cover"
        height={360}
        loading="lazy"
        src={
          project.image === ""
            ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAHNfBU0X0PyUm4cJP9TXdejBZn0QQgenqSlOKsyNyrVvoJ8vJfu0xPpUdTf0eI0zyd71Hv7e7twCnvYYIRiVeaWgX4KE_xt7QUNmHfxiTq8X9pnsAg8StuCgAU8nF2jh9wL42dhleDFal5J28IAgvhhzMDx8e8TVl9qISZQx3ltBn-3riGpXpeYPIWEnfYv2gxPQuea5l_bWyXRQqln61SG8hKiW_xeQMmYP_IUO4imRZfBIPQ5301b5jxAOf-Ih5q5SX9eMDMLdSh"
            : `${project.image}`
        }
        width={640}
      />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="min-h-14 overflow-hidden text-xl font-bold leading-7 text-slate-900 [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box] dark:text-slate-100">
          {project.title}
        </h3>
        <p className="mt-2 min-h-20 overflow-hidden text-sm leading-5 text-slate-600 [-webkit-box-orient:vertical] [-webkit-line-clamp:4] [display:-webkit-box] dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 min-h-14 flex flex-wrap content-start gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-auto flex gap-3 pt-5">
          <Button
            as="a"
            href={project.githubUrl}
            target="_blank"
            variant="secondary"
            className="flex items-center gap-2"
          >
            <FaGithub size={22} />
            <span>Github</span>
          </Button>
          <Button
            as="a"
            href={project.demoUrl}
            target="_blank"
            variant="primary"
          >
            Demo
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
