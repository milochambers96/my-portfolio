import { FaReact } from "react-icons/fa6";
import { SiTypescript, SiTailwindcss, SiSwiper } from "react-icons/si";

const Footer = () => {
  const footerCopyright = "Copyright © Milo Chambers 2024";

  return (
    <footer className="bg-woodland-muted/75 w-full">
      <div id="footer-content-container" className=" mt-10 w-4/5 mx-auto">
        <div
          id="footer-message-container"
          className="md:w-4/5 mx-auto px-6 py-4 space-y-2 text-woodland-text"
        >
          <p className="flex justify-center md:text-lg font-semibold font-redhat">
            {footerCopyright}
          </p>
          <p className="flex items-center justify-center md:text-sm flex-wrap md:flex-nowrap font-outfit">
            <span className="inline-flex items-center">
              Built using React
              <FaReact className="text-woodland-secondary ml-1" />
            </span>
            ,
            <span className="inline-flex items-center ml-1">
              TypeScript
              <SiTypescript className="text-woodland-secondary ml-1" />
            </span>
            ,
            <span className="inline-flex items-center ml-1">
              Tailwind
              <SiTailwindcss className="text-woodland-secondary ml-1" />
            </span>
            , and
            <span className="inline-flex items-center ml-1">
              Swiper
              <SiSwiper className="text-woodland-secondary ml-1" />
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
