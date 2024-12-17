import { IInterest } from "../../../interfaces/interest";

import { GiChefToque, GiMountainClimbing } from "react-icons/gi";
import { BsEasel } from "react-icons/bs";

import {
  cheffingDescription,
  clamberingDescription,
  creativeDescription,
} from "./interestDescription";
import { cheffingToCode, clamberingToCode1, creativeToCode1 } from "./toCode";

import {
  argGlacier1,
  argGlacier2,
  ecuadorWaterfall,
  mordor,
} from "./ImageObjects.tsx/clamberingImgs";

import { cheffingImages } from "./ImageObjects.tsx/cheffingImgs";
import { creatingImages } from "./ImageObjects.tsx/creatingImgs";

export const cheffing: IInterest = {
  title: "Cheffing & Munching",
  description: cheffingDescription,
  icon: <GiChefToque />,
  favourite: {
    intro: "Resturants that make me (ir)rationally happy:",
    favList: [
      "Mangal 1, Dalston, London",
      "The Eagle, Farringdon, London",
      "Lao Dao, Walworth, London",
      "Ristorante Mabrouk, Alghero, Sardinia",
    ],
  },
  linkToCode: cheffingToCode,
  images: cheffingImages,
};

export const clambering: IInterest = {
  title: "Clambering & Exploring",
  description: clamberingDescription,
  icon: <GiMountainClimbing />,
  favourite: {
    intro: "Hike's that left an impression:",
    favList: [
      "Los Glaciares National Park Circuit, Argentina",
      "Sumaco Volcano, Ecuador",
      "Tongariro Crossing, New Zealand",
      "The Kheerganga Trek, India",
    ],
  },

  images: [argGlacier1, argGlacier2, ecuadorWaterfall, mordor],
  linkToCode: clamberingToCode1,
};

export const creating: IInterest = {
  title: "Creative Explorations",
  description: creativeDescription,
  icon: <BsEasel />,
  favourite: {
    intro: "Hike's that left an impression:",
    favList: [
      "Los Glaciares National Park Circuit, Argentina",
      "Sumaco Volcano, Ecuador",
      "Tongariro Crossing, New Zealand",
      "The Kheerganga Trek, India",
    ],
  },
  linkToCode: creativeToCode1,
  images: creatingImages,
};
