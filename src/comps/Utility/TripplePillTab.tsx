import { useState, useEffect } from "react";

interface PillProps {
  option1: string;
  option2: string;
  option3: string;
  info?: string;
  setInfo: (arg: string) => void;
}

const TripplePillTab = ({
  option1,
  option2,
  option3,
  info,
  setInfo,
}: PillProps) => {
  const [opt1Text, setOpt1Text] = useState("");
  const [opt2Text, setOpt2Text] = useState("");
  const [opt3Text, setOpt3Text] = useState("");
  const [whatToRender, setWhatToRender] = useState(option1);

  useEffect(() => {
    if (option1 !== "") {
      const capitalLet = option1[0].toUpperCase();
      const newText = option1.replace(option1[0], capitalLet);
      setOpt1Text(newText);
    }

    if (option2 !== "") {
      const capitalLet = option2[0].toUpperCase();
      const newText = option2.replace(option2[0], capitalLet);
      setOpt2Text(newText);
    }

    if (option3 !== "") {
      const capitalLet = option3[0].toUpperCase();
      const newText = option3.replace(option3[0], capitalLet);
      setOpt3Text(newText);
    }
    setInfo(whatToRender);
  }, [whatToRender]);

  return (
    <div className="relative bg-woodland-muted/70 rounded-full p-1 flex w-full shadow-xl font-redhat">
      {/* Sliding background */}
      <div
        className={`absolute top-1 h-[calc(100%-8px)] w-[calc(33%-1px)] rounded-full transition-all duration-300 ease-in-out bg-woodland-accent 
              ${info === option1 && "translate-x-0"}
              ${info === option2 && "translate-x-full"}
              ${info === option3 && "translate-x-[200%]"}`}
      />

      {/* Buttons */}
      <button
        onClick={() => setWhatToRender(option1)}
        className="w-1/3  rounded-full py-1 text-sm font-medium transition-colors relative z-10"
      >
        <span
          className={
            info === option1 ? "text-white" : "text-woodland-secondary"
          }
        >
          {opt1Text}
        </span>
      </button>

      <button
        onClick={() => setWhatToRender(option2)}
        className="w-1/3  rounded-full py-1 text-sm font-medium transition-colors relative z-10"
      >
        <span
          className={
            info === option2 ? "text-white" : "text-woodland-secondary"
          }
        >
          {opt2Text}
        </span>
      </button>

      <button
        onClick={() => setWhatToRender(option3)}
        className="w-1/3  rounded-full py-1 text-sm font-medium transition-colors relative z-10"
      >
        <span
          className={
            info === option3 ? "text-white" : "text-woodland-secondary"
          }
        >
          {opt3Text}
        </span>
      </button>
    </div>
  );
};

export default TripplePillTab;
