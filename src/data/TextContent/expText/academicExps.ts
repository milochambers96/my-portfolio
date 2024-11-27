import { IAcademicExp } from "../../../interfaces/pastExp";

import gaLogo from "../../../assets/images/prev-exp-images/generalassembly_logo.jpeg";
import cisiLogo from "../../../assets/images/prev-exp-images/cisi_logo.jpeg";
import kclLogo from "../../../assets/images/prev-exp-images/kcl_logo.jpeg";
import sussexLogo from "../../../assets/images/prev-exp-images/sussex_logo.jpeg";

export const academicExps: IAcademicExp[] = [
  {
    id: 1,
    course: "Software Engineering Bootcamp",
    institution: "General Assembly",
    location: "remote",
    duration: "Jul 2024 - Oct 2024",
    grade: "",
    icon: gaLogo,
  },

  {
    id: 2,
    course: "Diploma in Investment and Compliance",
    institution: "CISI",
    location: "remote",
    duration: "Dec 2022 - Nov 2023",
    grade: "Merit",
    icon: cisiLogo,
  },

  {
    id: 3,
    course: "MA in Conflict Resolution in Divided Societies",
    institution: "King's College London",
    location: "London",
    duration: "Sep 2020 - Sep 2021",
    grade: "Distinction",
    icon: kclLogo,
  },

  {
    id: 4,
    course: "BA in Anthropology",
    institution: "Univeristy of Sussex",
    location: "Sussex",
    duration: "Sep 2015 - Aug 2018",
    grade: "First Class Honours",
    icon: sussexLogo,
  },
];
