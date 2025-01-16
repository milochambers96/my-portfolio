import { FaLink } from "react-icons/fa";

import {
  // connectMessage1,
  // connectMessage2,
  // connectMessage3,
  connectMessage4,
} from "../../data/TextContent/connectText/connectMessage";

import { connectOptions } from "../../data/TextContent/connectText/connectOptions";

const ConnectShell = () => {
  return (
    <section id="connect" className="pt-[60px]">
      <article>
        <div className="p-6">
          <div
            id="connect-container"
            className="mx-auto md:w-4/5 p-6 backdrop-blur-sm bg-woodland-muted border-2 border-woodland-secondary rounded-lg space-y-6 "
          >
            <div id="connect-title-container" className="flex justify-center">
              <h2 className="flex items-center justify-center gap-2 text-2xl md:text-3xl text-woodland-text font-bold font-space">
                <FaLink className="text-woodland-secondary" />
                Connect
              </h2>
            </div>

            <div id="connect-message-container">
              <p className="leading-relaxed text-justify text-woodland-text font-semibold font-outfit">
                {connectMessage4}
              </p>
            </div>
            <div
              id="connect-options-container"
              className="flex justify-center gap-4 font-bold md:text-xl font-redhat"
            >
              {connectOptions.map((option) => (
                <div key={option.connectId}>
                  <p className="text-woodland-link hover:text-woodland-link-select transition-colors duration-200">
                    <a
                      href={option.link}
                      {...(option.connectOption !== "Email"
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className="flex  items-center justify-center gap-1 md:px-4 md:py-2"
                    >
                      {option.connectOption}{" "}
                      <span className="text-woodland-secondary">
                        {option.connectIcon}
                      </span>
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ConnectShell;
