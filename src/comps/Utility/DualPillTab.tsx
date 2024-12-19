import { useState, useEffect } from "react";

interface PillProps {
  option1: string;
  option2: string;
  demoDisplay?: string;
  setDemoDisplay: (arg: string) => void;
}

const DualPillTab = ({
  demoDisplay,
  setDemoDisplay,
  option1,
  option2,
}: PillProps) => {
  const [opt1Text, setOpt1Text] = useState("");
  const [opt2Text, setOpt2Text] = useState("");
  const [infoToRender, setInfoToRender] = useState(option1);

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
    setDemoDisplay(infoToRender);
  }, [infoToRender]);

  return (
    <div className="relative bg-woodland-muted/70 rounded-full p-1 flex w-48 font-redhat">
      {/* Sliding background */}
      <div
        className={`absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full transition-all duration-300 ease-in-out bg-woodland-accent
              ${
                demoDisplay === option2 ? "translate-x-full" : "translate-x-0"
              }`}
      />

      {/* Buttons */}
      <button
        onClick={() => setInfoToRender(option1)}
        className="w-1/2 rounded-full py-1 text-sm font-medium transition-colors relative z-10"
      >
        <span
          className={
            demoDisplay === option1 ? "text-white" : "text-woodland-secondary"
          }
        >
          {opt1Text}
        </span>
      </button>
      <button
        onClick={() => setInfoToRender(option2)}
        className="w-1/2 rounded-full py-1 text-sm font-medium transition-colors relative z-10"
      >
        <span
          className={
            demoDisplay === option2 ? "text-white" : "text-woodland-secondary"
          }
        >
          {opt2Text}
        </span>
      </button>
    </div>
  );
};

export default DualPillTab;
