import { BiGitBranch } from "react-icons/bi";

import ProjectItem from "./ProjectItem";
import MobileDeviceShell from "./DeviceComps/MobileDeviceShell";
import ProjectInfoShell from "./ProjectInfoShell";

import { GAProjects } from "../../data/TextContent/projectsText/projects";

const gaProjectsArray = GAProjects;

const ProjectSectionIntro =
  "From concept to code - check out my latest projects below.";

const ProjectDisplayShell = () => {
  return (
    <section id="my-projects" className="pt-[60px]">
      <div className="mt-10">
        <div id="project-intros" className="space-y-4 mb-8 md:mb-20">
          <div className="flex justify-center mx-auto  md:w-1/3">
            <h2 className=" flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold font-space text-woodland-text">
              <span>
                <BiGitBranch className="text-woodland-secondary" />{" "}
              </span>{" "}
              Recent Projects
            </h2>
          </div>
          <div className="flex justify-center mx-auto w-3/4">
            <h4 className="text-sm md:text-xl text-justify text-woodland-text font-semibold font-redhat ">
              {ProjectSectionIntro}
            </h4>
          </div>
        </div>

        <div
          id="ga-projects-desktop-view"
          className="hidden md:block space-y-8"
        >
          {gaProjectsArray.map((project) => (
            <article
              key={project.projectNum}
              id={`ga-project-desktop-display-${project.projectNum}`}
            >
              <ProjectItem
                project={project}
                isEven={project.projectNum % 2 === 0}
              />
            </article>
          ))}
        </div>

        <div
          id="ga-projects-mobile-view-container"
          className="md:hidden space-y-4"
        >
          {gaProjectsArray.map((project) => (
            <article
              key={project.projectNum}
              id={`ga-project-${project.projectNum}-mobile`}
              className=""
            >
              <div className="mb-4">
                <ProjectInfoShell project={project} />
              </div>
              <div className="mb-4">
                <MobileDeviceShell demo={project.demo?.mobile} />
              </div>
              {project.projectNum !== gaProjectsArray.length && (
                <div className="h-1 mt-10  border  border-woodland-muted rounded-lg bg-woodland-muted/70"></div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDisplayShell;
