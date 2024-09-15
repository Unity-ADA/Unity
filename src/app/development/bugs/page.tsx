
import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import BugList from "@/core/Development/Kanban/Bugs";

export const metadata: Metadata = {
  title: "Development Bugs List | Unity",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <BugList />
      </DefaultLayout>
    </>
  );
}
