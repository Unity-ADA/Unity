
import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import CuratorsIndex from "@/core/Curators";

export const metadata: Metadata = {
  title: "Curator | Unity",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <CuratorsIndex />
      </DefaultLayout>
    </>
  );
}
