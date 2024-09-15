
import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import DevelopmentIndex from "@/core/Development";

export const metadata: Metadata = {
  title: "Development | Unity",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <DevelopmentIndex />
      </DefaultLayout>
    </>
  );
}
