import { FaCode } from "react-icons/fa6";

import SkillsGrid from "./AboutMeComps/SkillsGrid";

const Skills = () => {
  return (
    <section id="skills" className="pt-[60px]">
      <h2 className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold font-space text-woodland-text">
        <FaCode className="text-woodland-secondary" />
        Technical Skills
      </h2>
      <SkillsGrid />
    </section>
  );
};

export default Skills;
