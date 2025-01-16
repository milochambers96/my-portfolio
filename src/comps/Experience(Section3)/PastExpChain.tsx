import { IWorkExp, IAcademicExp } from "../../interfaces/pastExp";

interface ExpChainProp {
  pastExp: (IWorkExp | IAcademicExp)[];
}

const PastExpChain = ({ pastExp }: ExpChainProp) => {
  return (
    <article id="past-exp-chain" className="text-woodland-accent-text">
      <div className="space-y-6 md:space-y-16 relative">
        {pastExp.map((exp, id) => (
          <div
            key={id}
            id={`past-exp-bubble-${exp.id}`}
            className="flex justify-center leading-relaxed"
          >
            <div className="md:w-4/5 backdrop-blur-sm bg-woodland-muted shadow-lg border-2 border-woodland-secondary rounded-lg p-4 shadow-2xl">
              <div className="grid grid-cols-4 gap-4 md:ml-4">
                <div
                  id={`exp-text-container-${exp.id}`}
                  className="col-span-3 space-y-2 md:mt-5 font-outfit"
                >
                  <h4 className="font-bold font-redhat text-sm md:text-lg">
                    {"position" in exp ? exp.position : exp.course}
                  </h4>
                  <p className="text-sm md:text-base">
                    {" "}
                    {exp.institution} || {exp.location}
                  </p>
                  <p className="text-sm md:text-base"> {exp.duration} </p>
                  {"grade" in exp && (
                    <p className="font-bold text-sm md:text-base">
                      {exp.grade}
                    </p>
                  )}
                </div>
                <div
                  id={`exp-image-container-${exp.id}`}
                  className="col-span-1 flex items-center"
                >
                  <div className="flex md:justify-end w-full">
                    <img
                      className="size-16 md:size-32 border border-woodland-secondary"
                      src={exp.icon}
                      alt={`${exp.institution}'s logo`}
                    />
                  </div>
                </div>
              </div>
              {"responsibilities" in exp && (
                <ul className="mt-4 space-y-2 list-disc list-outside px-4 md:ml-4 md:pl-4 md:pr-6 font-outfit">
                  {exp.responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="text-sm md:text-justify leading-relaxed "
                    >
                      {responsibility}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default PastExpChain;
