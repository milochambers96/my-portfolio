import { useState } from "react";

import ProjectItem from "./ProjectItem";
import MobileDeviceShell from "./DeviceComps/MobileDeviceShell";
import ProjectInfoShell from "./ProjectInfoShell";

import { GAProjects } from "../../data/TextContent/projectsText/projects";

const gaProjectsArray = GAProjects;

const ProjectDisplayShell = () => {
  return (
    <section id="my-projects" className="pt-[60px]">
      <div id="ga-projects-desktop-view" className="hidden md:block space-y-8">
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
    </section>
  );
};

export default ProjectDisplayShell;
