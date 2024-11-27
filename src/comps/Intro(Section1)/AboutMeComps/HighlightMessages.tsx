import { useState, useMemo, useEffect } from "react";

// import {
//   FaMagnifyingGlass,
//   FaLayerGroup,
//   FaRocket,
//   FaLightbulb,
// } from "react-icons/fa6";

const HighlightMessages = () => {
  const highlightMessages = useMemo(
    () => [
      {
        title: "Adaptable Learner",
        message:
          "From social sciences to banking to development - thriving on learning new technologies and approaches",
      },
      {
        title: "Analytical Mindset",
        message:
          "Bringing investigative rigor from financial compliance into elegant coding solutions",
      },
      {
        title: "Development Focus",
        message:
          "Full-stack developer passionate about building efficient, user-focused applications",
      },
      {
        title: "User-Centered",
        message:
          "Combining technical skills with strong communication to deliver solutions that truly serve user needs",
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
    <div
      id="highlight-messages"
      className={`flex items-center justify-center w-10/12 min-h-[62px] mx-auto gap-2 text-sm md:text-xl font-bold ${
        isInFadeState
          ? "animate-[highlight-message-fade-out_4s_ease-in-out] opacity-0"
          : "animate-[highlight-message-fade-in_4s_ease-in-out] opacity-100"
      }`}
    >
      <h4>{highlightMessage.message}</h4>
    </div>
  );
};

export default HighlightMessages;
