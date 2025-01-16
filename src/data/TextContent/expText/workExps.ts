import { IWorkExp } from "../../../interfaces/pastExp";
import { respGHIB, respSigWatch, respJT, respFreedom } from "./workResp";
import ghibLogo from "../../../assets/images/prev-exp-images/ghib_logo.jpeg";
import sigLogo from "../../../assets/images/prev-exp-images/sigwatch_logo.jpeg";
import jtLogo from "../../../assets/images/prev-exp-images/juntion_tavern_logo.png";
import fftLogo from "../../../assets/images/prev-exp-images/freedom_from_torture_logo.jpeg";

export const workExps: IWorkExp[] = [
  {
    id: 1,
    position: "Fin Crime Compliance Analyst",
    institution: "GHIB",
    location: "London",
    duration: "Aug 2022 - Jul 2024",
    responsibilities: respGHIB,
    icon: ghibLogo,
  },
  {
    id: 2,
    position: "ESG Data Research Analyst",
    institution: "SIGWATCH",
    location: "London",
    duration: "Apr 2022 - Jul 2022",
    responsibilities: respSigWatch,
    icon: sigLogo,
  },
  {
    id: 3,
    position: "Shift Supervisor",
    institution: "The Junction Tavern",
    location: "London",
    duration: "Sep 2018 - Jul 2021",
    responsibilities: respJT,
    icon: jtLogo,
  },
  {
    id: 4,
    position: "Fundraising Officer",
    institution: "Freedom from Torture",
    location: "London",
    duration: "Jan 2019 - Jul 2019",
    responsibilities: respFreedom,
    icon: fftLogo,
  },
];
