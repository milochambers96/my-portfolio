import { careerJourneyParagraphs } from "../../../data/TextContent/introText/aboutMe";
import { FaCameraRetro } from "react-icons/fa6";

const MyBrand = () => {
  return (
    <article
      id="my-brand-statement"
      className="max-w-4xl mx-auto p-6 h-full text-woodland-text"
    >
      <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-bold mb-6">
        <FaCameraRetro className="text-woodland-secondary" />
        Milo in a Snapshot
      </h3>

      <div className="space-y-4 text-justify leading-relaxed font-semibold">
        {careerJourneyParagraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </article>
  );
};

export default MyBrand;
