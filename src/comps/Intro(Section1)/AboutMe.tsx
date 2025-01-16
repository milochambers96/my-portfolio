import { FaPuzzlePiece } from "react-icons/fa6";

import MyBrand from "./AboutMeComps/MyBrand";
import SkillsGrid from "./AboutMeComps/SkillsGrid";
import HighlightMessages from "./AboutMeComps/HighlightMessages";

const AboutMe = () => {
  return (
    <section id="about-me" className="pt-[60px]">
      <div
        id="about-me-intro-container"
        className="flex flex-col justify-center items-center md:space-y-6 sm:space-y-2 text-woodland-text"
      >
        <h2 className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold font-space">
          <FaPuzzlePiece className="text-woodland-secondary mb-2" />A Little Bit
          About Me...
        </h2>
        <HighlightMessages />
      </div>
      {/* <div id="about-me-desktop-view" className="hidden md:block">
        <div className="space-y-4 py-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 h-full">
              <MyBrand />
            </div>
            <div className="col-span-1 h-full">
              <SkillsGrid />
            </div>
          </div>
        </div>
      </div> */}

      <div id="about-me-mobile-view" className="space-y-4 ">
        <MyBrand />
        <SkillsGrid />
      </div>
    </section>
  );
};

export default AboutMe;
