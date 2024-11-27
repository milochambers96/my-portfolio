import { IProject } from "../../data/TextContent/projectsText/projects";

import ProjectOverview from "./ProjectInfoComps/ProjectOverview";
import ProjectLinks from "./ProjectInfoComps/ProjectLinks";

interface ProjectInfoProps {
  project: IProject;
}

const ProjectInfoShell = ({ project }: ProjectInfoProps) => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      <div className="w-full p-6">
        <div id={`GA-project${project.projectNum}-info-container`}>
          <h2 className="flex items-center justify-center gap-2 text-xl md:text-2xl text-woodland-text font-bold mb-6">
            <span className="text-woodland-secondary">{project.icon}</span>{" "}
            {project.title}
          </h2>

          <ProjectOverview project={project} />
          <ProjectLinks
            num={project.projectNum}
            repo={project.repo}
            deployed={project.deployed}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoShell;
