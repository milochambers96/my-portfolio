import { FaGithub } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

interface ProjectLinkAddress {
  num: number;
  repo: string;
  deployed: string;
}
("    hover:shadow-woodland-link-select transition-shadow duration-1000 ");

const ProjectLinks = ({ num, repo, deployed }: ProjectLinkAddress) => {
  const projectButtonLinkTWGroup = `text-center inline-block px-4 py-2 bg-woodland-accent text-woodland-link font-bold rounded-lg shadow-md shadow-woodland-muted
  hover:scale-105 hover:shadow-xl hover:text-woodland-link-select transition-all duration-1000
  focus:outline-none focus:ring-2 focus:ring-desert-accent focus:ring-offset-2`;

  return (
    <div
      id={`project-${num}-buttons-container`}
      className="grid grid-cols-2 justify-center gap-4 md:gap-10 mt-8"
    >
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className={projectButtonLinkTWGroup}
      >
        <span className="flex gap-1 items-center justify-center">
          GitHub Repo <FaGithub />
        </span>
      </a>

      <a
        href={deployed}
        target="_blank"
        rel="noopener noreferrer"
        className={projectButtonLinkTWGroup}
      >
        <span className="flex gap-1 items-center justify-center">
          Live Site <TbWorldWww />
        </span>
      </a>
    </div>
  );
};

export default ProjectLinks;
