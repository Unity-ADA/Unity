
import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import ComponentsIndex from "@/core/Development/Components";

export const metadata: Metadata = {
  title: "Components | Unity",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ComponentsIndex />
      </DefaultLayout>
    </>
  );
}
