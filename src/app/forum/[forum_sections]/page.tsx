
import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import ForumIndex from "@/core/Forum";
import ForumSections from "@/core/Forum/ForumSections";

export const metadata: Metadata = {
  title: "Forum Section | Unity",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ForumSections />
      </DefaultLayout>
    </>
  );
}
