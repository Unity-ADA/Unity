
import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import Homepage from "@/core/Homepage";

export const metadata: Metadata = {
  title: "Unity",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Homepage />
      </DefaultLayout>
    </>
  );
}
