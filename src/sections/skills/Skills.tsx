import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { skills } from "../../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section className="py-16 sm:py-20" id="skills">
      <Container>
        <SectionTitle title="Technical Arsenal" />
        <div className="mx-auto mt-2 h-1.5 w-20 rounded-full bg-emerald-600" />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
