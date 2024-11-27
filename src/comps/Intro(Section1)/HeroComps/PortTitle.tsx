import { FaHand } from "react-icons/fa6";

const PortTitle = () => {
  return (
    <>
      <h1
        id="portfolio-title"
        className="flex items-center justify-center gap-2 text-3xl md:text-6xl font-extrabold"
      >
        Hi I'm Milo{" "}
        <FaHand className="my-auto text-woodland-secondary animate-wave origin-[70%_70%]" />{" "}
      </h1>
      <h2
        id="portfolio-subtitle"
        className="text-xl md:text-4xl text-justify font-semibold leading-relaxed"
      >
        I am a{" "}
        <span className="font-bold italic text-woodland-link">
          Full-Stack Developer
        </span>
        , based in{" "}
        <span className="font-bold italic text-woodland-link">London</span>,
        with a background in social sciences and anti-money laundering
        investigations.
      </h2>
    </>
  );
};

export default PortTitle;
