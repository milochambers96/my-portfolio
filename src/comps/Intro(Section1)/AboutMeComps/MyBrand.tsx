import { careerJourneyParagraphs } from "../../../data/TextContent/introText/aboutMe";
import { FaCameraRetro } from "react-icons/fa6";

const MyBrand = () => {
  const paragraphTitles = [
    "Foundations & Approach",
    "Solutions & Progress",
    "Next Chapter & Aspirations",
  ];
  return (
    <article
      id="my-brand-statement"
      className="p-9 mx-auto py-6 text-woodland-text"
    >
      <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-bold font-space mb-6">
        <FaCameraRetro className="text-woodland-secondary" />
        In a Snapshot
      </h3>
      <div className="text-justify">
        {careerJourneyParagraphs.map((para, index) => (
          <>
            <h6 className="text-md md:text-lg mx-4 text-center md:text-justify md:mx-0 text-woodland-link italic font-semibold font-redhat mb-2">
              {paragraphTitles[index]}
            </h6>
            <p
              key={index}
              className="mx-4 leading-relaxed font-outfit font-medium mb-6"
            >
              {para}
            </p>
          </>
        ))}
      </div>
    </article>
  );
};

export default MyBrand;
