import { IProject } from "../../../data/TextContent/projectsText/projects";
import BuildStack from "./BuildStack";

interface ProjectOverview {
  project: IProject;
}

const ProjectOverview = ({ project }: ProjectOverview) => {
  const buildTechStack = project.builtWith;
  const descriptionPararaphs = project.description.split("\n\n");

  return (
    <div className="flex flex-col space-y-6 text-woodland-text font-outfit">
      <div
        id={`project${project.projectNum}-subtitle-container`}
        className="text-center"
      >
        <div className="hidden md:block px-4 text-sm font-medium">
          <div className="flex justify-between">
            <div className="w-[48%] py-2  border border-woodland-secondary rounded-lg bg-woodland-muted/60">
              <p className="font-medium">{project.projectType}</p>
            </div>
            <div className="w-[48%] py-2  border border-woodland-secondary rounded-lg bg-woodland-muted/60">
              <p className="font-medium">
                {project.buildFormat} project - {project.duration}
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-4 text-sm">
          <div className="w-4/5 mx-auto py-2 border border-woodland-secondary rounded-lg bg-woodland-muted/60 shadow">
            <p>{project.projectType}</p>
          </div>
          <div className="w-4/5 mx-auto py-2 border border-woodland-secondary rounded-lg bg-woodland-muted/60 shadow">
            <p>
              {project.buildFormat} project - {project.duration}
            </p>
          </div>
        </div>
      </div>

      <div
        id={`project${project.projectNum}-summary-container`}
        className="space-y-6 text-justify font-semibold leading-relaxed"
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
