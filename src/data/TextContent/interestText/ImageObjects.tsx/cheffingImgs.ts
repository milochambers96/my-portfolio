import { InterestImage } from "../../../../interfaces/interest";

import samVong from "../../../../assets/images/interest-images/cheffing-images/sambal-vongole.jpg";
import redChimi from "../../../../assets/images/interest-images/cheffing-images/red-chimi.jpg";

const sambalVong: InterestImage = {
  source: samVong,
  caption:
    "East meets West dinner experiment - a spicy sambal vongole. Sometimes the best ideas come from mixing different worlds together - works for coding, definitely works for dinner!",
  alt: "A cozy dinner setting with two dishes: spaghetti vongole with sambal sauce in a terracotta bowl, and roasted fennel with parmesan on a white plate, lit by candlelight",
};

export const steakChimichurri: InterestImage = {
  source: redChimi,
  caption:
    "Tried making chimichurri red instead of green - turns out playing around with classics can yield great results.",
  alt: "A plate of sliced steak with vibrant red chimichurri sauce, served alongside crispy potatoes and a fresh green salad",
};

export const cheffingImages: InterestImage[] = [sambalVong, steakChimichurri];
