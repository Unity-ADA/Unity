
import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import ForumIndex from "@/core/Forum";
import ForumSections from "@/core/Forum/ForumSections";
import ForumPost from "@/core/Forum/ForumPost";

export const metadata: Metadata = {
  title: "Forum Post | Unity",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ForumPost />
      </DefaultLayout>
    </>
  );
}
