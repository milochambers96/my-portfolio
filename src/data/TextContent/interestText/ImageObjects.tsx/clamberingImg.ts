import { InterestImage } from "../../../../interfaces/interest";

import glacier1 from "../../../../assets/images/interest-images/hiking-images/los-glaciers.jpg";
import glacier2 from "../../../../assets/images/interest-images/hiking-images/los-glaciers-2.jpg";
import waterfall from "../../../../assets/images/interest-images/hiking-images/ecuador-waterfall.jpg";
import mountDoom from "../../../../assets/images/interest-images/hiking-images/mount-doom.jpg";

export const argGlacier1: InterestImage = {
  source: glacier1,
  caption:
    "Scenary from a multiday hike in Los Glaciers National Park, Argentina. Took a refreshing dip in this glacier water.",
  alt: "A pristine river winding through snow-capped mountains in Patagonia.",
};

export const argGlacier2: InterestImage = {
  source: glacier2,
  caption:
    "Waking up to this view at our campsite in Los Glaciares National Park - worth the chilly night.",
  alt: "Image of mountain and glacier lake in Patagonia, Argentina.",
};

export const ecuadorWaterfall: InterestImage = {
  source: waterfall,
  caption:
    "Free climbing a waterfall in the Ecuadorian Amazon... not sure I would do this today.",
  alt: " cascading waterfall in the Amazon rainforest with sunlight filtering through the canopy.",
};

export const mordor: InterestImage = {
  source: mountDoom,
  caption:
    "Mt. Ngauruhoe (Mount Doom) on the Tongariro Crossing, New Zealand. A Lord of the Rings fan's dream.",
  alt: "The volcanic cone of Mount Ngauruhoe rising dramatically from the Tongariro landscape.",
};
