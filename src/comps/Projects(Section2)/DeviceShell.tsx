import { IDemo } from "../../data/TextContent/projectsText/projects";

import DesktopDeviceShell from "./DeviceComps/DesktopDeviceShell";
import MobileDeviceShell from "./DeviceComps/MobileDeviceShell";

interface DeviceShellProps {
  projectDemo: IDemo | undefined;
  demoDisplay: string;
}

const DeviceShell = ({ projectDemo, demoDisplay }: DeviceShellProps) => {
  return (
    <div
      id="project-device-container"
      className="max-w-4xl mx-auto p-6  rounded-lg min-h-[780px] h-full"
    >
      <div className="h-[calc(100%-4rem)]">
        {demoDisplay === "desktop" ? (
          <div className="flex items-center justify-center h-full">
            <div className="w-full">
              <DesktopDeviceShell demo={projectDemo?.desktop} />
            </div>
          </div>
        ) : (
          <MobileDeviceShell demo={projectDemo?.mobile} />
        )}
      </div>
    </div>
  );
};

export default DeviceShell;
