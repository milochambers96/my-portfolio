import react from "react";

export interface IInterest {
  title: string;
  icon: react.JSX.Element;
  description: string;
  favourite?: Favourites;
  images?: InterestImage[];
  linkToCode: string;
}

interface Favourites {
  intro: string;
  favList: string[];
}

export interface InterestImage {
  source: string;
  caption: string;
  alt: string;
}
