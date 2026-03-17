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
    <section className="py-20 sm:py-28" id="work">
      <Container>
        <RevealSection>
          <SectionTitle
            label="// projects"
            title="Selected Work"
            subtitle="Backend-focused projects and system design work."
          />

          <div className="mt-12 flex flex-col gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              as="a"
              href={profile.github}
              target="_blank"
              variant="secondary"
            >
              <FaGithub size={16} />
              <span>View All on GitHub</span>
            </Button>
          </div>
        </RevealSection>
      </Container>
    </section>
  );
}

export default Work;
