import Chip from "@/components/Chip";
import { kanban_item } from "@/consts/kanban";
import { FC } from "react";

interface KanbanItemProps {
  item: kanban_item;
  index: number;
}

const KanbanItem: FC <KanbanItemProps> = ({ item, index }) => {
  let clr = ""
  switch (index) {
    case index = 0:
      clr = 'bg-meta-1'
      break;
    case index = 1:
      clr = 'bg-meta-6'
      break;
    case index = 2:
      clr = 'bg-meta-3'
      break;
    case index = 3:
      clr = 'bg-meta-5'
      break;
    default:
      break;
  }

  return (
    <div className="border-2 border-slate-300 dark:border-neutral-900 mt-4 rounded-md p-2 bg-neutral-100 dark:bg-neutral-900/30 hover:dark:bg-neutral-900/70 transition-all duration-300 hover:scale-105">
      <h3 className="text-lg font-semibold dark:text-neutral-200 pl-1 flex gap-2 items-center justify-center">
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${clr}`}></span>
        {item.title}
      </h3>

      <p className="dark:text-neutral-400 text-md p-2">
        {item.description}
      </p>

      <div className="-mb-4 flex justify-center">
        {item.category && (
          <Chip text={item.category} size="xs"/>
        )}
      </div>

    </div>
  );
};

export default KanbanItem;