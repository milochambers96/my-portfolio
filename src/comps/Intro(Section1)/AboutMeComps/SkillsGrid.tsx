import { mySkills } from "../../../data/TextContent/introText/mySkills";

import { FaCode } from "react-icons/fa";

const SkillsGrid = () => {
  const skills = mySkills;

  return (
    <article className="max-w-4xl mx-auto p-6 h-full">
      <h3 className="flex items-center justify-center gap-2 text-2xl font-bold mb-6 text-woodland-text">
        <FaCode className="text-woodland-secondary" />
        Technical Skills
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={
              "flex flex-col items-center p-4 rounded-lg border border-woodland-secondary bg-woodland-text hover:-translate-y-2 transition-all duration-300 ease-in-out"
            }
          >
            <div className={`text-4xl ${skill.color} mb-2`}>{skill.icon}</div>
            <span className="text-sm font-medium text-center">
              {skill.name}
            </span>
            <span className="text-xs text-gray-500 mt-1">{skill.category}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default SkillsGrid;
