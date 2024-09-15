
import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import KanbanIndex from "@/core/Development/Kanban";

export const metadata: Metadata = {
  title: "Development Kanban | Unity",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <KanbanIndex />
      </DefaultLayout>
    </>
  );
}
