import { curators_id } from "@/utils/Types";

export interface kanban_item {
  title?: string;
  description?: string;
  category?: string;
  curators?: curators_id[];
  url?: string;
}

interface bugs {
  last_updated: number;
  todo?: kanban_item[];
  in_prog?: kanban_item[];
  completed?: kanban_item[];
  ideas?: kanban_item[];
}

const bugs: bugs[] = [{
  last_updated: 1726206719,
  todo: [
    {
      title: 'Sidenav Layout',
      description: `
        When the screen is mobile sized and you open the sidenav, it will force the page to exceed its limit.
      `,
      category: 'Layout'
    },
  ],
  in_prog: [
    {
      title: 'Lightmode',
      description: `
        The light mode theme is not perfect, or even close to it by any standards but this is undergoing an
        overhaul and we're changing this into a dark monochrome/greyscale theme so we never have to have our eyes
        burned, ever... again.
      `,
      category: 'Theme'
    },
  ],
  completed: [
    {
      title: 'DexHunter Layout',
      description: `
        When the screen is mobile sized, the dexhunter swap component exceeds the page limits.
      `,
      category: 'Layout'
    },
  ],
}]

export default bugs;