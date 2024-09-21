import { links } from "@/utils/Interfaces";

interface team_members {
  name: string;
  stake_wallets: string[];
  links?: links;
};

interface team {
  slug: string;
  team_members: team_members[];
};

const team: team[] = [
  {
    slug: "unity",
    team_members: [
      {
        name: "Ashe. T",
        stake_wallets: [
          "stake1u8jka9zheupfhj2jvzwc074rcqqp4sj9kgkww87qf2jwglqvdp5g2",
        ],
        links: {
          discord_handle: "@ashetaylor"
        }
      }
    ]
  },
  {
    slug: "mom",
    team_members: [
      {
        name: "LUGDOR",
        stake_wallets: [
          "stake1uyskt0pytrpjcc3lye4l5kwx3ls44x0ea7l2y7nvwfm386cjmuljw",
        ],
        links: {
          discord_handle: "@lugdor"
        }
      }
    ]
  }
];

export default team;