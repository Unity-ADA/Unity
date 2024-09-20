
import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import ForumIndex from "@/core/Forum";

export const metadata: Metadata = {
  title: "Forum | Unity",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ForumIndex />
      </DefaultLayout>
    </>
  );
}
