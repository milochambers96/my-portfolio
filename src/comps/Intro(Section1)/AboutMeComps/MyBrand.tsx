import { useState, useMemo, useEffect } from "react";
import {
  FaPuzzlePiece,
  FaMagnifyingGlass,
  FaLayerGroup,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa6";

const MyBrand = () => {
  const pastPara = `As a Software Engineer with a foundation in social sciences and financial crime investigation, 
    I bring a unique approach to technology development. My academic background in Anthropology and Conflict 
    Resolution, combined with experience across NGO and banking sectors, enables me to approach technical 
    challenges with both systematic precision and human understanding. My journey from fundraising at human rights
    NGO to financial crime investigation at a bank has honed my ability to analyze complex data patterns while keeping 
    human impact at the center of solutions.`;

  const presentPara = `Through building full-stack applications, I've discovered my passion for creating technology 
    that bridges complex problems with user-focused solutions. My experience in pattern recognition and systematic 
    problem-solving drives me to develop efficient, innovative software that supports independent businesses and 
    creators. This combination of technical skills and human insight allows me to build applications that not only 
    perform effectively but also make a real difference to specific user groups.`;

  const highlightMessages = useMemo(
    () => [
      {
        title: "Analytical Approach",
        icon: <FaMagnifyingGlass />,
        message:
          "Systematic problem-solver transitioning strong analytical skills from financial investigation to coding solutions",
      },
      {
        title: "Development Focus",
        icon: <FaLayerGroup />,
        message:
          "Full-stack developer passionate about building efficient, user-focused applications",
      },
      {
        title: "Continuous Growth",
        icon: <FaRocket />,
        message:
          "Strong track record of taking on new disciplines and methodologies, transitioning from social sciences to finance to development",
      },
      {
        title: "Solution Driven",
        icon: <FaLightbulb />,
        message:
          "Experience working with a variety of systems and frameworks across sectors, and translating user needs into practical solutions",
      },
    ],
    []
  );

  const [highlightMessage, setHighlightMessage] = useState(
    highlightMessages[0]
  );
  const [isInFadeState, setIsInFadeState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsInFadeState(true);
      setTimeout(() => {
        let newIndex = highlightMessages.indexOf(highlightMessage) + 1;
        if (newIndex === highlightMessages.length) {
          newIndex = 0;
        }
        setHighlightMessage(highlightMessages[newIndex]);
        setIsInFadeState(false);
      }, 4000);
    }, 8000);

    return () => clearInterval(interval);
  }, [highlightMessages, highlightMessage]);

  return (
    <section
      id="my-brand"
      className="max-w-4xl mx-auto p-6 bg-olive-secondary rounded-lg h-full"
    >
      <h2 className="flex items-center gap-2 text-2xl font-bold mb-6 text-desert-dark">
        <FaPuzzlePiece className="text-desert-accent" />A little bit about me...
      </h2>

      <div
        id="highlight-messages"
        className={`flex items-center gap-2 text-1xl font-bold mb-6 text-sage-dark ${
          isInFadeState
            ? "animate-[highlight-message-fade-out_4s_ease-in-out] opacity-0"
            : "animate-[highlight-message-fade-in_4s_ease-in-out] opacity-100"
        }`}
      >
        <span className="text-desert-accent">{highlightMessage.icon}</span>
        <span>{highlightMessage.message}</span>
      </div>

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
