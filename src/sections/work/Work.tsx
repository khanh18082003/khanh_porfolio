import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Work() {
  return (
    <section className="py-16 sm:py-20" id="work">
      <Container>
        <SectionTitle
          title="Work"
          subtitle="Selected backend-focused projects and system design work."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Work;
