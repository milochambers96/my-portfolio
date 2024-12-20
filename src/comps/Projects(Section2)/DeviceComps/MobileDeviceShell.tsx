import { useState, useEffect, useRef } from "react";

interface MobileDemoProp {
  demo: string | undefined;
}

const MobileDeviceShell = ({ demo }: MobileDemoProp) => {
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  // useEffect(() => {
  //   const getVideoAspectRatio = (videoElement: HTMLVideoElement): number => {
  //     return videoElement.videoWidth / videoElement.videoHeight;
  //   };

  //   if (videoRef.current) {
  //     videoRef.current.onloadedmetadata = () => {
  //       if (videoRef.current) {
  //         const ratio = getVideoAspectRatio(videoRef.current);
  //         setAspectRatio(ratio);
  //         console.log("Aspect Ratio:", ratio);
  //       }
  //     };
  //   }
  // }, []);

  return (
    <div className="relative max-w-[305px] mx-auto">
      {/* iPhone Frame */}
      <div className="bg-black rounded-[3rem] p-3 shadow-xl">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10"></div>
        {/* Power Button */}
        <div className="absolute right-[-8px] top-20 w-2 h-16 bg-gray-800 rounded-r-lg"></div>
        {/* Volume Buttons */}
        <div className="absolute left-[-8px] top-20 w-2 h-8 bg-gray-800 rounded-l-lg"></div>
        <div className="absolute left-[-8px] top-32 w-2 h-8 bg-gray-800 rounded-l-lg"></div>
        {/* Screen */}
        <div className="bg-black rounded-[1.8rem] overflow-hidden aspect-[9/19.5]">
          {/* Project Demo Content */}
          <div className="p-[0.15rem] bg-black">
            <video
              className="w-full h-full object-cover rounded-[1.8rem]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={demo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDeviceShell;
