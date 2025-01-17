import { IProject } from "../../../data/TextContent/projectsText/projects";
import BuildStack from "./BuildStack";

interface ProjectOverview {
  project: IProject;
}

const ProjectOverview = ({ project }: ProjectOverview) => {
  const buildTechStack = project.builtWith;
  // const descriptionPararaphs = project.description.split("\n\n")
  const projectSubtitles = [
    "Context & Vision",
    "Build & Innovation",
    "Impact & Insights",
  ];

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
        className="text-justify"
      >
        {project.description.map((para, index) => (
          <>
            <h6 className="text-md md:text-sm mx-4 text-center md:text-justify  text-woodland-link italic font-semibold font-redhat mb-2 md:mb-1">
              {projectSubtitles[index]}
            </h6>
            <p
              key={index}
              className="mx-4 leading-relaxed font-outfit font-medium mb-6"
            >
              {para}
            </p>
          </>
        ))}

        <BuildStack buildTechStack={buildTechStack} />
      </div>
    </div>
  );
};

export default ProjectOverview;
