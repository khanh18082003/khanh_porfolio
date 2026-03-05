import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden p-0 hover:scale-[1.02]">
      <img
        alt={project.title}
        className="aspect-video w-full object-cover"
        src={project.image}
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <Button as="a" href={project.githubUrl} variant="secondary">
            GitHub
          </Button>
          <Button as="a" href={project.demoUrl}>
            Demo
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
