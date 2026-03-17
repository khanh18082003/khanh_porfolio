import Container from "../../components/layout/Container";
import RevealSection from "../../components/layout/RevealSection";
import SectionTitle from "../../components/ui/SectionTitle";
import { skills } from "../../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section className="py-20 sm:py-28" id="skills">
      <Container>
        <RevealSection>
          <SectionTitle
            label="// skills"
            title="Technical Arsenal"
            subtitle="Technologies and tools I work with on a daily basis."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </RevealSection>
      </Container>
    </section>
  );
}

export default Skills;
