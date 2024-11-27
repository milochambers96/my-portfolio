import { useState } from "react";

import DeviceShell from "./DeviceShell";
import MobileDeviceShell from "./DeviceComps/MobileDeviceShell";
import DualPillTab from "../UtilityComps/DualPillTab";
import ProjectInfoShell from "./ProjectInfoShell";

import { GAProjects } from "../../data/TextContent/projectsText/projects";
import { IProject } from "../../data/TextContent/projectsText/projects";

const gaProjectsArray = GAProjects;

const ProjectDisplayShell = () => {
  const [demoDisplay, setDemoDisplay] = useState("desktop");

  const formatProjects = (project: IProject, projectNum: number) => {
    if (projectNum % 2 === 0) {
      return (
        <>
          <div className="col-span-1">
            <div className="flex justify-center">
              <DualPillTab
                demoDisplay={demoDisplay}
                setDemoDisplay={setDemoDisplay}
                option1={"desktop"}
                option2={"mobile"}
              />
            </div>
            <ProjectInfoShell project={project} />
          </div>
          <div className="col-span-1">
            <DeviceShell projectDemo={project.demo} demoDisplay={demoDisplay} />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="col-span-1">
            <DeviceShell projectDemo={project.demo} demoDisplay={demoDisplay} />
          </div>
          <div className="col-span-1">
            <div className="flex justify-center">
              <DualPillTab
                demoDisplay={demoDisplay}
                setDemoDisplay={setDemoDisplay}
                option1={"desktop"}
                option2={"mobile"}
              />
            </div>
            <ProjectInfoShell project={project} />
          </div>
        </>
      );
    }
  };

  return (
    <section id="my-projects" className="pt-[60px]">
      <div id="ga-projects-desktop-view" className="hidden md:block space-y-8">
        {gaProjectsArray.map((project) => (
          <article
            key={project.projectNum}
            id={`ga-project-desktop-${project.projectNum}`}
          >
            <div className="grid grid-cols-2 gap-4">
              {formatProjects(project, project.projectNum)}
            </div>
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
    </section>
  );
};

export default ProjectDisplayShell;
