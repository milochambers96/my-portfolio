import { useState } from "react";

// import { IWorkExp, IAcademicExp } from "../../interfaces/pastExp";
import { workExps } from "../../data/TextContent/expText/workExps";
import { academicExps } from "../../data/TextContent/expText/academicExps";

import { FaRoute } from "react-icons/fa6";

import DualPillTab from "../UtilityComps/DualPillTab";
import PastExpChain from "./PastExpChain";

import { connectOptions } from "../../data/TextContent/connectText/connectOptions";

// interface ExpChainProp {
//   pastExp: (IWorkExp | IAcademicExp)[];
// }

const PastExpShell = () => {
  const [demoDisplay, setDemoDisplay] = useState("professional");

  const pastExpArr = demoDisplay === "professional" ? workExps : academicExps;

  const linkedInLink = connectOptions.find(
    (option) => option.connectOption === "LinkedIn"
  );

  console.log(linkedInLink);

  return (
    <section id="previous-exp" className="mx-auto pt-[60px] px-6 h-full">
      <div className="mt-10">
        <div className="flex justify-center mx-auto  md:w-1/3">
          <h2 className="flex items-center justify-center gap-2 text-2xl md:text-3xl md:text-4xl text-woodland-text font-bold mb-6">
            {" "}
            <span>
              <FaRoute className="text-woodland-secondary" />{" "}
            </span>{" "}
            My journey so far
          </h2>
        </div>
        <div
          id="past-exp-display-control-container"
          className="flex justify-center mx-auto mb-6 md:w-1/3"
        >
          <DualPillTab
            demoDisplay={demoDisplay}
            setDemoDisplay={setDemoDisplay}
            option1="professional"
            option2="academic"
          />
        </div>

        <div>
          <PastExpChain pastExp={pastExpArr} />
        </div>

        <article className="flex justify-center mt-6 md:mt-16">
          <div className="flex justify-center md:w-4/5 border-2 border-woodland-secondary rounded-lg shadow-lg px-4 py-6">
            <p className="text-woodland-text text-sm md:text-lg text-justify">
              Please check out{" "}
              <a
                href={linkedInLink?.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" inline-flex items-center gap-1 font-bold mx-1 text-woodland-link hover:text-woodland-link-select transition-colors duration-200"
              >
                {linkedInLink?.connectOption}
                <span className="text-woodland-secondary">
                  {linkedInLink?.connectIcon}
                </span>
              </a>{" "}
              for a comprehensive breakdown of my professional and academic
              background.{" "}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PastExpShell;
