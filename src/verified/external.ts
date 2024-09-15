import { links } from "@/utils/Interfaces";

interface external {
  name: string;
  description: string;
  image: string;
  category: string;
  links: links;
};

const external: external[] = [
  {
    name: "Minswap",
    description: "Minswap is a multi-pool decentralized exchange that runs on the Cardano Blockchain.",
    image: "/token-images/minswap.png",
    category: "Dex",
    links: {
      discord: "https://discord.gg/minswap",
      twitter: "https://twitter.com/MinswapDEX",
      website: "https://minswap.org/",
      reddit: "https://reddit.com/r/MinSwap",
      github: "https://github.com/minswap"
    }
  },
  {
    name: "DexHunter",
    description: "HUNT is the utility token of DexHunter, an advanced trading platform with dex aggregation, market alerts, and a smooth interface.",
    image: "/token-images/hunt.webp",
    category: "Dex Aggregator",
    links: {
      twitter: "https://x.com/DexHunterIO",
      website: "https://dexhunter.io/",
    },
  },
];

export default external;