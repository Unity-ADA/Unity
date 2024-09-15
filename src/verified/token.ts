import { extra_token_information, images, information, launchpad, links, token_information, project_team } from "@/utils/Interfaces";
import { curators_id } from "@/utils/Types";

interface token {
  slug: string;
  category: string;
  information: information;
  token_informtion: token_information;
  images: images;
  curated_by: curators_id[];
  links: links;
  extra_token_information?: extra_token_information;
}

const token: token[] = [
  {
    slug: 'unity',
    information: {
      name: 'Unity',
      ticker: 'UNY',
      description: `
        Unity offers an intuitive user interface and a comprehensive suite of tools,
        making it a valuable resource for both developers and investors in the Cardano
        ecosystem. The platform's dashboard is designed to be user-friendly, catering to
        the needs of both developers and investors without overwhelming them with a
        complex interface.
      `,
    },
    images: {
      logo: '/token-images/unity.svg',
      header: '',
    },
    category: 'Utility',
    curated_by: ["ASHE"],
    token_informtion: {
      supply: 0,
      decimals: 0,
      fingerprint: "",
      policy_id: "",
      policy_id_full: ""
    },
    links: {
      discord: 'https://discord.gg/Vx6U85nbQt',
      github: 'https://github.com/Unity-Cardano/Unity',
      twitter: "https://x.com/UnityCardano",
    },
    //extra_token_information: { launchpad: { start_time: 0 }}
  },
  {
    slug: 'usdm',
    information: {
      name: 'Moneta USD',
      ticker: 'USDM',
      description: `
        Moneta's USDM is set to revolutionize decentralized finance on Cardano. With unmatched transparency,
        adaptability, and security, USDM is the stablecoin you've been waiting for.
      `,
    },
    images: {
      logo: '/token-images/usdm.png',
      header: '',
    },
    category: 'Stablecoin',
    curated_by: ["ASHE"],
    token_informtion: {
      supply: 6899984.43,
      decimals: 6,
      fingerprint: 'asset12ffdj8kk2w485sr7a5ekmjjdyecz8ps2cm5zed',
      policy_id: 'c48cbb3d5e57ed56e276bc45f99ab39abe94e6cd7ac39fb402da47ad',
      policy_id_full: 'c48cbb3d5e57ed56e276bc45f99ab39abe94e6cd7ac39fb402da47ad0014df105553444d'
    },
    links: {
      discord: "https://discord.gg/usdm",
      twitter: "https://x.com/USDMOfficial",
      website: "https://www.mehen.io/",
    },
  },
  {
    slug: 'hunt',
    category: 'DEX Aggregator',
    curated_by: ["ASHE"],
    information: {
      name: 'DexHunter Token',
      ticker: 'HUNT',
      description: `
        HUNT is the utility token of DexHunter, an advanced trading platform with dex
        aggregation, market alerts, and a smooth interface.
      `,
    },
    images: {
      logo: '/token-images/hunt.webp',
      header: '',
    },
    token_informtion: {
      supply: 100000000,
      decimals: 6,
      fingerprint: 'asset12ffdj8kk2w485sr7a5ekmjjdyecz8ps2cm5zed',
      policy_id: '95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb00',
      policy_id_full: '95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb0048554e54'
    },
    links: {
      twitter: "https://x.com/DexHunterIO",
      website: "https://dexhunter.io/",
    },
  },
  {
    slug: 'minswap',
    category: 'DEX',
    curated_by: ["ASHE"],
    information: {
      name: 'Minswap Token',
      ticker: 'MIN',
      description: `
        Minswap is a multi-pool decentralized exchange that runs on the Cardano Blockchain.
      `,
    },
    images: {
      logo: '/token-images/minswap.png',
      header: '',
    },
    token_informtion: {
      supply: 3000000000,
      decimals: 6,
      fingerprint: 'asset1d9v7aptfvpx7we2la8f25kwprkj2ma5rp6uwzv',
      policy_id: '29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c6',
      policy_id_full: '29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e'
    },
    links: {
      discord: "https://discord.gg/minswap",
      github: "https://github.com/minswap",
      twitter: "https://x.com/MinswapDEX",
      reddit: "https://www.reddit.com/r/MinSwap/",
      website: "https://minswap.org/",
    },
  },
  {
    slug: 'dedi',
    information: {
      name: 'Dedium',
      ticker: 'DEDI',
      description: `
        DEDI is the native token of Dedium, a decentralized computing economy. Use the power of
        your idle GPU for AI and rendering workloads and earn DEDI.
      `,
    },
    images: {
      logo: '/token-images/dedium.jpg', /** @TODO dont use jpg */
      header: '',
    },
    category: 'DePIN',
    curated_by: ["ASHE"],
    token_informtion: {
      supply: 250000000,
      decimals: 6,
      fingerprint: 'asset1246cefejqp68g6qd20qfaryyv6ery2lqxv88xt',
      policy_id: '64f7b108bd43f4bde344b82587655eeb821256c0c8e79ad48db15d18',
      policy_id_full: '64f7b108bd43f4bde344b82587655eeb821256c0c8e79ad48db15d1844454449'
    },
    links: {
      discord: "https://discord.gg/zbkUTrtaGK",
      telegram: "https://t.me/dedium",
      twitter: "https://x.com/DediumNetwork",
      website: "https://dedium.io/",
    },
  },
  {
    slug: 'sharl',
    information: {
      name: 'Sharl Huskens',
      ticker: 'SHARL',
      description: `
        The first peer reviewed meme & memecoin.
      `,
    },
    images: {
      logo: '/token-images/sharl.png',
      header: '',
    },
    category: 'Meme',
    curated_by: ["ASHE"],
    token_informtion: {
      supply: 999000000000,
      decimals: 0,
      fingerprint: 'asset1hhtlh65h5d5nyj2ermgx33lwzz0v80k3tq986y',
      policy_id: '590f6d119b214cdcf7ef7751f8b7f1de615ff8f6de097a5ce62b257b',
      policy_id_full: '590f6d119b214cdcf7ef7751f8b7f1de615ff8f6de097a5ce62b257b534841524c'
    },
    links: {
      discord: "https://discord.gg/JtPqNKEjhh",
      twitter: "https://x.com/sharlhuskens",
      website: "https://sharl.world/",
    },
  },
  {
    slug: 'mom',
    information: {
      name: 'MOM Token',
      ticker: 'MOM',
      description: `
        YOUR $MOM ON CARDANO
      `,
    },
    images: {
      logo: 'https://momonada.github.io/main/public/assets/main_image.jpg',
      header: 'https://momonada.github.io/main/public/assets/background.jpg',
    },
    category: 'Meme',
    curated_by: ["ASHE"],
    token_informtion: {
      supply: 2000000000,
      decimals: 5,
      fingerprint: 'asset1q6y3m5emf2wylp6whr8fxckrd76cwe8xl37nnv',
      policy_id: 'ed5517ccf67c60004355cee3c546c77226cd89a04b3aaeae6a65589e',
      policy_id_full: 'ed5517ccf67c60004355cee3c546c77226cd89a04b3aaeae6a65589e4d6f6d'
    },
    links: {
      discord: "https://discord.gg/CueKtH2Cs9",
      telegram: "https://t.me/+7ndbw5QA7ppkOGFk",
      twitter: "https://x.com/mom_on_ada",
      website: "https://momonada.github.io/main/",
    },
  },
];

export default token;