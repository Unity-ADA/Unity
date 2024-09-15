import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import AllCurators from "@/core/Curators/AllCurators";

export const metadata: Metadata = {
  title: "All Curators | Unity",
};

export default function TokenPage() {

  return (
    <>
      <DefaultLayout>
        <AllCurators/>
      </DefaultLayout>
    </>
  );
}
