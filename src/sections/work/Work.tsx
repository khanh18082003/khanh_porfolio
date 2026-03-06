import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import RevealSection from "../../components/layout/RevealSection";
import Button from "../../components/ui/Button";
import { profile } from "../../data/profile";
import { FaGithub } from "react-icons/fa6";

function Work() {
  return (
    <section className="py-16 sm:py-20" id="work">
      <Container>
        <RevealSection>
          <SectionTitle
            title="Work"
            subtitle="Selected backend-focused projects and system design work."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button
              as="a"
              href={profile.github}
              target="_blank"
              className="flex w-fit items-center gap-2"
            >
              <FaGithub size={22} />
              <span>View All Projects</span>
            </Button>
          </div>
        </RevealSection>
      </Container>
    </section>
  );
}

export default Work;
