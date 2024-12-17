import { InterestImage } from "../../../../interfaces/interest";

import redonda from "../../../../assets/images/interest-images/creative-images/CoR-Venice.jpg";
import newBendExhibt from "../../../../assets/images/interest-images/creative-images/new-bend-H&W.jpeg";
import signs from "../../../../assets/images/interest-images/creative-images/berlin-sign-graveyard.jpg";

const courtOfRedonda: InterestImage = {
  source: redonda,
  caption:
    "Helped out with this exhibition at the Venice Biennale - pretty surreal seeing the 'Court of Redonda' come to life in such an iconic space.",
  alt: "A photograph of the Court of Redonda, an art instilation at Venice Biennale.",
};

const hauserwirthGalleryImage: InterestImage = {
  source: newBendExhibt,
  caption:
    "Caught 'The New Bend' at Hauser & Wirth Somerset - fascinating how different patterns can create whole new meanings when working together.",
  alt: "A gallery space showing The New Bend exhibition, featuring colorful quilts and textile works, including a large geometric quilt on the ceiling and various contemporary pieces on white walls.",
};

const berlinSigns: InterestImage = {
  source: signs,
  caption:
    "Stumbled across this amazing graveyard of old Berlin street signs. Had to capture it on 35mm film to get that fitting 'moody' vibe.",
  alt: "A film photo of a collection of retired vintage Berlin signs.",
};

export const creatingImages = [
  courtOfRedonda,
  hauserwirthGalleryImage,
  berlinSigns,
];
