import { IInterest } from "../../interfaces/interest";

interface InterestArticleProps {
  interest: IInterest;
}

const InterestArticle = ({ interest }: InterestArticleProps) => {
  const descriptionParaArray = interest.description.split("\n\n");

  console.log("The interest desription is");

  return (
    <div className="col-span-1">
      <div id="interest-overview" className="space-y-3">
        <div className="flex justify-center">
          <h3
            id="interest-header-container"
            className="inline-flex gap-1 font-semibold text-xl text-woodland-text"
          >
            <span className="text-woodland-secondary my-auto">
              {interest.icon}
            </span>{" "}
            {interest.title}
          </h3>
        </div>

        <div
          id="interest-context-container"
          className="text-justify leading-relaxed font-medium text-woodland-text space-y-3 px-2"
        >
          <div className="space-y-3">
            {descriptionParaArray.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          <div>
            <p>{interest.linkToCode}</p>
          </div>

          {/* <div className="space-y-1">
            <p>{interest.favourite?.intro}</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              {interest.favourite?.favList.map((liItem, index) => (
                <li key={index}>{liItem}</li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default InterestArticle;
