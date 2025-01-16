import {
  project1Description,
  project2Description,
  project3Description,
  project4Description,
} from "./projectsDescriptions";

import project1DeskDemo from "../../Videos/DeskDemo/Project1-Desk.mp4";

import project2DeskDemo from "../../Videos/DeskDemo/Project2-Desk.mp4";
// import project2MobDemo from "../../Videos//Project2-Mobile.mp4";

import project3DeskDemo from "../../Videos/DeskDemo/Project3-Desk.mp4";
// import project3MobDemo from "../../Videos/Project3/Project3-Mobile.mp4";

import project4DeskDemo from "../../Videos/DeskDemo/Project4-Desk.mp4";
// import project4MobDemo from "../../Videos/Project4/Project4-Mobile.mp4";

import {
  project1MobDemoUrl,
  project2MobDemoUrl,
  project3MobDemoUrl,
  project4MobDemoUrl,
} from "../../Videos/MobileDemo/mobileDemoUrls";

import { FaGamepad, FaHatWizard, FaFilm, FaPalette } from "react-icons/fa";

export interface IProject {
  projectNum: number;
  title: string;
  icon: JSX.Element;
  projectType: string;
  builtWith: string[];
  buildFormat: string;
  duration: string;
  description: string[];
  repo: string;
  deployed: string;
  demo?: IDemo;
}

export interface IDemo {
  desktop: string;
  mobile?: string;
}

export const GAProjects: IProject[] = [
  {
    projectNum: 1,
    title: "Dotman; A PacMan 'Clone'",
    icon: <FaGamepad />,
    projectType: "Grid-Based JavaScript Game",
    builtWith: ["JavaScript", "HTML5", "CSS3"],
    buildFormat: "Solo",
    duration: "1 Week Sprint",
    description: project1Description,
    repo: "https://github.com/milochambers96/PacMan-Clone",
    deployed: "https://milochambers96.github.io/PacMan-Clone/",
    demo: {
      desktop: project1DeskDemo,
      mobile: project1MobDemoUrl,
    },
  },
  {
    projectNum: 2,
    title: "Harry Potter Quiz Game",
    icon: <FaHatWizard />,
    projectType: "React Multi-Page App",
    builtWith: ["React", "JavaScript", "HTML5", "CSS3", "Bulma"],
    buildFormat: "Pair",
    duration: "48 Hour Hackathon",
    description: project2Description,
    repo: "https://github.com/milochambers96/harry-potter-quiz-game/tree/main",
    deployed: "https://harry-potter-quiz-game.netlify.app/",
    demo: {
      desktop: project2DeskDemo,
      mobile: project2MobDemoUrl,
    },
  },

  {
    projectNum: 3,
    title: "Kino Connect",
    icon: <FaFilm />,
    projectType: "MERN Stack App",
    builtWith: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bulma",
      "Tailwind",
    ],
    buildFormat: "Solo",
    duration: "1 Week Sprint",
    description: project3Description,
    repo: "https://github.com/milochambers96/kino-frontend",
    deployed: "https://kino-connect.netlify.app/",
    demo: {
      desktop: project3DeskDemo,
      mobile: project3MobDemoUrl,
    },
  },

  {
    projectNum: 4,
    title: "OpenStudio",
    icon: <FaPalette />,
    projectType: "Full-Stack Python/TypeScript App",
    builtWith: [
      "Python",
      "Django",
      "PostgreSQL",
      "React",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bulma",
    ],
    buildFormat: "Solo",
    duration: "1 Week Sprint",
    description: project4Description,
    repo: "https://github.com/milochambers96/OpenStudio-FE",
    deployed: "https://openstudio.netlify.app/",
    demo: {
      desktop: project4DeskDemo,
      mobile: project4MobDemoUrl,
    },
  },
];
