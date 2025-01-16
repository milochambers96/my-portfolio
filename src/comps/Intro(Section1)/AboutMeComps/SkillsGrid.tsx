import { mySkills } from "../../../data/TextContent/introText/mySkills";

const SkillsGrid = () => {
  const skills = mySkills;

  return (
    <article className="max-w-6xl mx-auto p-6 h-full">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={
              "flex flex-col items-center p-4 rounded-lg border border-woodland-secondary bg-woodland-text hover:-translate-y-2 transition-all duration-300 ease-in-out"
            }
          >
            <div className={`text-4xl ${skill.color} mb-2`}>{skill.icon}</div>
            <span className="text-sm font-medium text-center font-redhat">
              {skill.name}
            </span>
            <span className="text-xs text-gray-500 font-outfit mt-1">
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default SkillsGrid;
