import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

interface IConnect {
  connectId: number;
  connectOption: string;
  connectIcon: JSX.Element;
  link: string;
}

export const connectOptions: IConnect[] = [
  {
    connectId: 1,
    connectOption: "LinkedIn",
    connectIcon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/milo-chambers/",
  },
  {
    connectId: 2,
    connectOption: "GitHub",
    connectIcon: <FaGithub />,
    link: "https://github.com/milochambers96",
  },
  {
    connectId: 3,
    connectOption: "Email",
    connectIcon: <FaEnvelope />,
    link: `mailto:chambersmilo@gmail.com?subject=${encodeURIComponent(
      "Let's Connect"
    )}&body=${encodeURIComponent("Hi Milo,")}`,
  },
];
