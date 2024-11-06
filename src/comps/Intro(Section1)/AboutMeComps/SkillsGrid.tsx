import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
  FaGit,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiBulma,
  SiVite,
  SiHeroku,
} from "react-icons/si";

const SkillsGrid = () => {
  const skills = [
    // Frontend
    {
      name: "React",
      icon: <FaReact />,
      color: "text-cyan-400",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "text-yellow-400",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "text-blue-600",
      category: "Frontend",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "text-orange-500",
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
      category: "Frontend",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "text-teal-500",
      category: "Frontend",
    },
    {
      name: "Bulma",
      icon: <SiBulma />,
      color: "text-[#00d1b2]",
      category: "Frontend",
    },
    {
      name: "Vite",
      icon: <SiVite />,
      color: "text-purple-500",
      category: "Frontend",
    },

    // Backend
    {
      name: "Node.js",
      icon: <FaNode />,
      color: "text-green-500",
      category: "Backend",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      color: "text-gray-500",
      category: "Backend",
    },
    {
      name: "Python",
      icon: <FaPython />,
      color: "text-yellow-500",
      category: "Backend",
    },
    {
      name: "Django",
      icon: <SiDjango />,
      color: "text-green-600",
      category: "Backend",
    },

    // Database
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "text-blue-400",
      category: "Database",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "text-orange-400",
      category: "Database",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "text-green-400",
      category: "Database",
    },

    // Tools
    {
      name: "Git",
      icon: <FaGit />,
      color: "text-orange-600",
      category: "Tools",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "text-gray-700",
      category: "Tools",
    },
    {
      name: "Heroku",
      icon: <SiHeroku />,
      color: "text-purple-600",
      category: "Tools",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto p-6 bg-desert-secondary rounded-lg h-full">
      <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
        <FaCode className="text-desert-accent" />
        Technical Skills
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={
              "flex flex-col items-center p-4 rounded-lg bg-white hover:shadow-md transition-all duration-300 ease-in-out"
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
    </section>
  );
};

export default SkillsGrid;
