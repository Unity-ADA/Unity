import React, { FC } from "react";

import Breadcrumb from "@/components/Breadcrumb";

import kanban from "@/consts/kanban";
import KanbanItem from "./KanbanItem";

const KanbanIndex: FC = ({ }) => {

  return (
    <div>
      <Breadcrumb sub_page_1="Development" active_page="Kanban"/>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <p className="py-1 flex justify-center text-lg font-bold text-black dark:text-neutral-200">To Do's</p>

          <div className="px-4 mb-4 text-gray-500 dark:text-neutral-400 h-100 overflow-y-auto mt-4 px-2 text-center text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            { kanban.map((items) => items.todo && items.todo.map((item) => (
              <KanbanItem item={item} index={0}/>
            )))}
          </div>
        </div>

        <div>
          <p className="py-1 flex justify-center text-lg font-bold text-black dark:text-neutral-200">In Progress</p>

          <div className="px-4 mb-4 text-gray-500 dark:text-neutral-400 h-100 overflow-y-auto mt-4 px-2 text-center text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            { kanban.map((items) => items.in_prog && items.in_prog.map((item) => (
              <KanbanItem item={item} index={1}/>
            )))}
          </div>
        </div>

        <div>
          <p className="py-1 flex justify-center text-lg font-bold text-black dark:text-neutral-200">Completed</p>

          <div className="px-4 mb-4 text-gray-500 dark:text-neutral-400 h-100 overflow-y-auto mt-4 px-2 text-center text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            { kanban.map((items) => items.completed && items.completed.map((item) => (
              <KanbanItem item={item} index={2}/>
            )))}
          </div>
        </div>

        <div>
          <p className="py-1 flex justify-center text-lg font-bold text-black dark:text-neutral-200">Ideas</p>

          <div className="px-4 mb-4 text-gray-500 dark:text-neutral-400 h-100 overflow-y-auto mt-4 px-2 text-center text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            { kanban.map((items) => items.ideas && items.ideas.map((item) => (
              <KanbanItem item={item} index={3}/>
            )))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanIndex;
