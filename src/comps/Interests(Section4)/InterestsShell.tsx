import { useEffect, useState } from "react";
import { FaFingerprint } from "react-icons/fa6";

import { intIntro2 } from "../../data/TextContent/interestText/interestIntro";
import { IInterest } from "../../interfaces/interest";
import {
  cheffing,
  clambering,
  creative,
} from "../../data/TextContent/interestText/interests";

import TripplePillTab from "../UtilityComps/TripplePillTab";
import InterestArticle from "./InterestArticle";
import SwiperComp from "./SwiperComp";

import { workExps } from "../../data/TextContent/expText/workExps";

const InterestsShell = () => {
  const [info, setInfo] = useState("clambering");
  const [interestData, setInterestData] = useState<IInterest>(cheffing);

  const intro = intIntro2;

  useEffect(() => {
    switch (info) {
      case "clambering":
        setInterestData(clambering);
        break;
      case "cheffing":
        setInterestData(cheffing);
        break;
      default:
        setInterestData(creative);
    }
  }, [info]);

  return (
    <section id="interests" className="pt-[60px]">
      <div id="interests-container" className="space-y-6 p-6">
        <div id="interests-header-container" className="flex justify-center">
          <h2 className="inline-flex gap-2 text-3xl font-bold text-woodland-text">
            <span className="my-auto text-woodland-secondary">
              <FaFingerprint />
            </span>
            The man behind the code
          </h2>
        </div>

        <div id="interests-intro-container" className="mx-auto px-2">
          <p className="text-justify text-woodland-text leading-relaxed font-medium">
            {intro}
          </p>
        </div>

        <div className="flex justify-center mx-auto mb-6 md:w-2/5 pb-2">
          <TripplePillTab
            option1="clambering"
            option2="cheffing"
            option3="creativity"
            info={info}
            setInfo={setInfo}
          />
        </div>

        <div className="hidden md:block">
          <div
            id="desktop-interest-grid-container"
            className="grid grid-cols-2 gap-4"
          >
            <article>
              <SwiperComp images={interestData.images} />
            </article>
            <article>
              <InterestArticle interest={interestData} />
            </article>
          </div>
        </div>

        <div className="md:hidden space-y-10">
          <InterestArticle interest={interestData} />
          <SwiperComp images={interestData.images} />
        </div>
      </div>
    </section>
  );
};

export default InterestsShell;