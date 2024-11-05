import {
  FaPuzzlePiece,
  FaCode,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaMagnifyingGlass,
} from "react-icons/fa6";

const MyBrand = () => {
  const pastPara = `As a Software Engineer with a foundation in social sciences and financial crime investigation, 
    I bring a unique approach to technology development. My academic background in Anthropology and Conflict Resolution, 
    combined with experience across NGO and banking sectors, enables me to approach technical challenges with both 
    systematic precision and human understanding. My journey from fundraising at Freedom from Torture to financial 
    crime investigation has honed my ability to analyze complex data patterns while keeping human impact at the 
    center of solutions.`;

  const presentPara = `Through building full-stack applications, I've discovered my passion for creating technology 
    that bridges complex problems with user-focused solutions. My experience in pattern recognition and systematic 
    problem-solving drives me to develop efficient, innovative software that supports independent businesses and 
    creators. This combination of technical skills and human insight allows me to build applications that not only 
    perform effectively but also make a real difference to specific user groups.`;

  return (
    <section
      id="my-brand"
      className="max-w-4xl mx-auto p-6 bg-olive-secondary rounded-lg h-full"
    >
      <h2 className="flex items-center gap-2 text-2xl font-bold mb-6 text-sage-dark">
        <FaPuzzlePiece className="text-desert-accent" />A little bit about me...
      </h2>

      <div id="past-para">
        <p className="text-justify text-desert-info">{pastPara}</p>
      </div>

      <br />

      <div id="pres-para">
        <p className="text-justify text-desert-info">{presentPara}</p>
      </div>
    </section>
  );
};

export default MyBrand;
