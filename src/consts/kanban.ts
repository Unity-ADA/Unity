import { curators_id } from "@/utils/Types";

export interface kanban_item {
  title?: string;
  description?: string;
  category?: string;
  curators?: curators_id[];
  url?: string;
}

interface kanban {
  last_updated: number;
  todo?: kanban_item[];
  in_prog?: kanban_item[];
  completed?: kanban_item[];
  ideas?: kanban_item[];
}

const kanban: kanban[] = [{
  last_updated: 1726206719,
  todo: [
    {
      title: 'Change Layout, again',
      description: `
        Personlly, the token and app cards on the homepage are just good enough, somehow make this better.
      `,
      category: 'Social'
    },
    {
      title: 'Create a community',
      description: `
        Unity currently has no community, I think. A discord has been made but hasn't been "shilled" yet.
        A strong community is good for entire ecosystem to stay connected.
      `,
      category: 'Social'
    },
    {
      title: 'We need MOAR!',
      description: `
        The Unity platform could really use some more curators, tokens and pools.
      `,
      category: 'Development'
    },
    {
      title: 'Create Partnerships on Cardano',
      description: `
        To help Unity become the best it can be, forming partnerships with other Cardano platforms and projects will be needed.
        This can include integrations of software.
      `,
      category: 'Social'
    },
    {
      title: 'Build Monochrome Theme',
      description: `
        Light mode is horrible to work with so instead of having a lightmode/darkmode theme, I'm opting to
        choose a Monochrome/Greyscale theme to replace what is currently light mode.
      `,
      category: 'Development'
    },
  ],
  in_prog: [
    {
      title: 'Build Guides',
      description: `
        We still need guides for token and pool curation along with the launchpad process.
      `,
      category: 'Development'
    },
    {
      title: 'Theme Overhaul',
      description: `
        Although progress has been made with the general theme of Unity, it still feels odd to use unless that's me overthinking everything.
      `,
      category: 'Development'
    },
    {
      title: 'Explain the Launchpad process',
      description: `
        The launchpad will come with a notice on how we will operate the entire process from start to finish.
      `,
      category: 'Development'
    },
  ],
  completed: [
    {
      title: 'DexHunter Integration',
      description: `
        DexHunter has been implemented into Unity allowing for the buying and selling of verified tokens.
        There is a 0.2% fee when engaging in swaps.
        Happy Trading!
      `,
      category: 'Development'
    },
    {
      title: 'Kanban Built',
      description: `
        The Kanban is used to keep track of development on Unity as a whole, not just the platform.
      `,
      category: 'Development'
    },
    {
      title: 'General Layout',
      description: `
        Create the core pages for Unity. These should include all token, pool and curator pages.
      `,
      category: 'Development'
    },
    {
      title: 'Pool.Pm Integration',
      description: `
        Unity now obtains data from Pool.Pm.
      `,
      category: 'Development'
    },
  ],
  ideas: [
    {
      title: 'cNFT Marketplace',
      description: `
        "Cardano currently has a problem, IMO, with cNFT Marketplaces.
        This problem is that one market has a 95%+ dominance.
        Because of this, we can build a new marketplace to compete and since we don't care for profit, we can compete on cheaper fees."
        -- Ashe
      `,
      category: 'Development'
    },
    {
      title: 'Cardano Casino',
      description: `
        "Cardano also lacks casino options, probably due to regulation but maybe this isn't the case for decentralised apps.
        This casino will run like a PvP server, you VS somebody else.
        Entry fees are put into an escrow and rewards are distributed to the winner." -- Ashe
      `,
      category: 'Development'
    },
    {
      title: 'cNFT RPG',
      description: `
        "I often use X and see some of the things that have been said on why people don't like Cardano and one of the
        reason is that it lacks games. This is understandable if you don't properly research as I'm aware of game planning
        to be built and that are already live on the Cardano blockchain. To help boost popularity with gaming on Cardano,
        I have plans to build an RPG game using cNFTs and will share my development when the time comes." -- Ashe
      `,
      category: 'Development'
    },
    {
      title: 'Unity Forums',
      description: `
        "Remember when forums where a big thing on the Internet, I miss them. Social media is good but its good to have
        one place where you can all come together and form communities under one space. I have thought about building a 
        forum website but in the style of 2024 and the introduction of Cardano. For avatars/icons, we could use an already
        established collection or hire an artist to create a new collection especially for Unity. The forums itself could
        have posts like new annoucements on Cardano, new project launches, general chit chat the list is endless." -- Ashe
      `,
      category: 'Development'
    },
  ]
}]

export default kanban;