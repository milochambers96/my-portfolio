import MyBrand from "./AboutMeComps/MyBrand";
import SkillsGrid from "./AboutMeComps/SkillsGrid";

const AboutMe = () => {
  return (
    <section id="about-me" className="section">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 h-full">
          <MyBrand />
        </div>
        <div className="col-span-1 h-full">
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
