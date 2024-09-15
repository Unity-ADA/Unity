
import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import BecomeACurator from "@/core/Development/Curators/BecomeCurator";

export const metadata: Metadata = {
  title: "Development | Unity",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <BecomeACurator />
      </DefaultLayout>
    </>
  );
}
