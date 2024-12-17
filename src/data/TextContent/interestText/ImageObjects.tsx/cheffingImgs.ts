import { InterestImage } from "../../../../interfaces/interest";

import amsterdamSambal from "../../../../assets/images/interest-images/cheffing-images/Amsterdam-sambal.jpeg";
import samVong from "../../../../assets/images/interest-images/cheffing-images/sambal-vongole.jpg";
import redChimi from "../../../../assets/images/interest-images/cheffing-images/red-chimi.jpg";
import tapas from "../../../../assets/images/interest-images/cheffing-images/tapas-night.jpeg";

const sambalShellfish: InterestImage = {
  source: amsterdamSambal,
  caption:
    "Had this amazing sambal shellfish in Amsterdam and had to try recreating it at home - sometimes you just can't get a good dish out of your head",
  alt: "A dinner spread featuring sambal beer shellfish, Vietnamese purple cabbage, and sesame lime carrots on a wooden table with decorative plates",
};

const sambalVong: InterestImage = {
  source: samVong,
  caption:
    "East meets West dinner experiment - a spicy sambal vongole. Sometimes the best ideas come from mixing different worlds together - works for coding, definitely works for dinner!",
  alt: "A cozy dinner setting with two dishes: spaghetti vongole with sambal sauce in a terracotta bowl, and roasted fennel with parmesan on a white plate, lit by candlelight",
};

const steakChimichurri: InterestImage = {
  source: redChimi,
  caption:
    "Tried making chimichurri red instead of green - turns out playing around with classics can yield great results.",
  alt: "A plate of sliced steak with vibrant red chimichurri sauce, served alongside crispy potatoes and a fresh green salad",
};

const tapasSpread: InterestImage = {
  source: tapas,
  caption:
    "Turned the kitchen into a Spanish tapas bar - sometimes the best results come from combining lots of small, well-crafted pieces",
  alt: "A spread of Spanish tapas including colorful tomato salad, olives, dips, crackers, and grapes arranged on a wooden table",
};

export const cheffingImages: InterestImage[] = [
  sambalShellfish,
  sambalVong,
  steakChimichurri,
  tapasSpread,
];
