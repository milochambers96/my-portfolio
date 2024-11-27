import { mySkills } from "../../../data/TextContent/introText/mySkills";

interface BuildStackProps {
  buildTechStack?: string[];
}

const BuildStack = ({ buildTechStack }: BuildStackProps) => {
  const getTechDetails = (tech: string) => {
    const foundTech = mySkills.find((skill) => skill.name === tech);
    return (
      <p className="flex items-center gap-2 text-woodland-text text-sm">
        {foundTech?.name}{" "}
        <span className={foundTech?.color}>{foundTech?.icon}</span>
      </p>
    );
  };

  if (!buildTechStack || buildTechStack.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6">
      {buildTechStack.map((tech, index) => (
        <div
          key={index}
          className="col-span-1 flex justify-center py-2  border border-woodland-secondary rounded-lg bg-woodland-muted/60"
        >
          {getTechDetails(tech)}
        </div>
      ))}
    </div>
  );
};

export default BuildStack;
