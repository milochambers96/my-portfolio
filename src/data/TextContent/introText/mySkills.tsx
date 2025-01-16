import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
  FaGit,
  FaGithub,
  FaTerminal,
  FaMarkdown,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiDjango,
  SiPostgresql,
  SiTailwindcss,
  SiBulma,
  SiVite,
  SiHeroku,
  SiPostman,
  SiNetlify,
} from "react-icons/si";

export const mySkills = [
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
    name: "Express.js",
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
  {
    name: "Netlify",
    icon: <SiNetlify />,
    color: "text-teal-400",
    category: "Tools",
  },

  {
    name: "Terminal",
    icon: <FaTerminal />,
    color: "text-green-400",
    category: "Tools",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "text-orange-500",
    category: "Tools",
  },
  {
    name: "Markdown",
    icon: <FaMarkdown />,
    color: "text-blue-400",
    category: "Tools",
  },
];
