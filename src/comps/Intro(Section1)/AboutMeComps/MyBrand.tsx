import {
  pastPara,
  presentPara,
} from "../../../data/TextContent/introText/aboutMe";
import { FaCameraRetro } from "react-icons/fa6";

const MyBrand = () => {
  return (
    <article
      id="my-brand-statement"
      className="max-w-4xl mx-auto p-6 h-full text-woodland-text"
    >
      <h3 className="flex items-center justify-center gap-2 text-2xl font-bold mb-6">
        <FaCameraRetro className="text-woodland-secondary" />
        Me in a Snapshot
      </h3>

      <div className="space-y-6 text-justify leading-relaxed tracking-wide font-medium">
        <p id="past-para">{pastPara}</p>
        <p id="pres-para">{presentPara}</p>
      </div>
    </article>
  );
};

export default MyBrand;
