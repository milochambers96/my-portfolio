import { useEffect, useState } from "react";
import { FaFingerprint } from "react-icons/fa6";

import { intIntro } from "../../data/TextContent/interestText/interestIntro";
import { IInterest } from "../../interfaces/interest";
import {
  cheffing,
  clambering,
  creating,
} from "../../data/TextContent/interestText/interests";

import TripplePillTab from "../UtilityComps/TripplePillTab";
import InterestArticle from "./InterestArticle";
import SwiperComp from "./SwiperComp";

const InterestsShell = () => {
  const [info, setInfo] = useState("clambering");
  const [interestData, setInterestData] = useState<IInterest>(cheffing);

  const intro = intIntro;

  useEffect(() => {
    switch (info) {
      case "clambering":
        setInterestData(clambering);
        break;
      case "cheffing":
        setInterestData(cheffing);
        break;
      default:
        setInterestData(creating);
    }
  }, [info]);

  return (
    <section id="interests" className="pt-[60px]">
      <div id="interests-container" className="space-y-6 p-6">
        <div id="interests-header-container" className="flex justify-center">
          <h2 className="flex gap-2 text-2xl md:text-3xl text-woodland-text font-bold font-space">
            <span className="my-auto text-woodland-secondary">
              <FaFingerprint />
            </span>
            The full stack of Milo
          </h2>
        </div>

        <div id="interests-intro-container" className="mx-auto px-2">
          <p className="text-justify text-woodland-text leading-relaxed font-semibold font-outfit">
            {intro}
          </p>
        </div>

        <div className="flex justify-center mx-auto mb-6 md:w-2/5 pb-2">
          <TripplePillTab
            option1="clambering"
            option2="cheffing"
            option3="creating"
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
