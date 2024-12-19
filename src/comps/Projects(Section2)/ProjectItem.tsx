import { useState } from "react";
import DualPillTab from "../Utility/DualPillTab";
import DeviceShell from "./DeviceShell";
import ProjectInfoShell from "./ProjectInfoShell";
import { IProject } from "../../data/TextContent/projectsText/projects";

interface ProjectItemProps {
  project: IProject;
  isEven: boolean;
}

const ProjectItem = ({ project, isEven }: ProjectItemProps) => {
  const [demoDisplay, setDemoDisplay] = useState("desktop");

  if (isEven) {
    return (
      <div className="grid grid-cols-2 gap-4">
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
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
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
    </div>
  );
};

export default ProjectItem;
