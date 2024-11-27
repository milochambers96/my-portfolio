import { IProject } from "../../../data/TextContent/projectsText/projects";
import BuildStack from "./BuildStack";

interface ProjectOverview {
  project: IProject;
}

const ProjectOverview = ({ project }: ProjectOverview) => {
  const buildTechStack = project.builtWith;
  const descriptionPararaphs = project.description.split("\n\n");

  return (
    <div className="flex flex-col space-y-6 text-woodland-text">
      <div
        id={`project${project.projectNum}-subtitle-container`}
        className="text-center"
      >
        <p className="font-medium">
          {project.projectType} || {project.buildFormat} project built as a{" "}
          {project.duration}
        </p>
      </div>

      <div
        id={`project${project.projectNum}-summary-container`}
        className="space-y-6 text-justify font-medium"
      >
        {descriptionPararaphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}

        <BuildStack buildTechStack={buildTechStack} />
      </div>
    </div>
  );
};

export default ProjectOverview;
