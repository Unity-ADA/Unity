import { FC } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Chip from "@/components/Chip";

const DevelopmentIndex: FC = () => {

  interface development_card_items {
    title: string;
    highlighted_word: string;
    category: string;
    description: string;
    button_text: string;
    button_url: string;
  }

  const development_card_items: development_card_items[] = [
    {
      title: 'Check our',
      highlighted_word: 'Kanban',
      category: 'R&D / Tool',
      description: `
        The Unity Kanban is a good way to keep up date with the development of the platform
        and Unity as a whole. The Kanban features tasks that are on our todo radar, in progress
        and completed tasks. The Kanban also features an ideas section in which our developers
        hope to do some day.
      `,
      button_text: 'Explore',
      button_url: '/development/kanban'
    },
    {
      title: 'Check our',
      highlighted_word: 'Bug List',
      category: 'R&D',
      description: `
        The Unity Bug List displays all knows bugs on the platform and the progress status of them
        being fixed.
      `,
      button_text: 'Explore',
      button_url: '/development/bugs'
    },
    {
      title: 'Become A',
      highlighted_word: 'Curator',
      category: 'Guide',
      description: `
        This is guide on how to become a curator. Because the developers of Unity believe in the
        power of open source, this guide directly teaches you on altering the files needed to make
        changes on the platform.
      `,
      button_text: 'Read Now',
      button_url: '/development/bac'
    },
    {
      title: 'Test the',
      highlighted_word: 'Forums',
      category: 'R&D / Tool',
      description: `
        The Unity forum has been built from the ground up in an attempt to modernize old school forums.
      `,
      button_text: 'Explore',
      button_url: '/forum'
    },
  ]

  return (
    <div>
      <Breadcrumb active_page="Development"/>

      <div className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {development_card_items.map((group, i) => {
            return (
              <Card key={i} hover_effect>
                <div className="p-1">
                  <h3 className="text-lg font-medium dark:text-neutral-200 flex gap-2 items-center justify-center">
                    {group.title}

                    <span className="font-bold tracking-widest dark:text-violet-400">
                      {group.highlighted_word}
                    </span>
                  </h3>

                  <div className="flex justify-center pt-2">
                    <Chip text={group.category} size="xs"/>
                  </div>

                  <p className="p-2 mb-4 text-gray-500 dark:text-neutral-400 h-25 overflow-y-auto mt-4 px-2 text-center text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    {group.description}
                  </p>

                  <div className="-mb-6 flex justify-center gap-4">
                    <Button text={group.button_text} size="xs" url={group.button_url}/>
                  </div>
                </div>
              </Card>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default DevelopmentIndex;