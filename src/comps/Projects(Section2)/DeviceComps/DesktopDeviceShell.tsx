interface DesktopDemoProp {
  demo: string | undefined;
}

const DesktopDeviceShell = ({ demo }: DesktopDemoProp) => {
  return (
    <div className="relative max-w-6xl mx-auto scale-110">
      {/* MacBook-style Frame */}
      <div className="bg-[#575757] rounded-2xl p-4 pt-8 shadow-xl">
        {/* Screen Bezel */}
        <div className="bg-[#272727] rounded-lg p-2">
          {/* Camera */}
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 rounded-full bg-[#272727]"></div>
          </div>
          {/* Screen Content */}
          <div className="bg-woodland-background rounded aspect-video w-full overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={demo} type="video/mp4" />
            </video>
          </div>
        </div>
        {/* Base/Stand */}
        <div className="relative">
          <div className="h-4 bg-[#575757] rounded-b-xl mx-auto mt-1">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#373737] rounded-t-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopDeviceShell;
