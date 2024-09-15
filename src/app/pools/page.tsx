import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import AllPools from "@/core/Pools/AllPools";

export const metadata: Metadata = {
  title: "All Pools | Unity",
};

export default function TokenPage() {

  return (
    <>
      <DefaultLayout>
        <AllPools/>
      </DefaultLayout>
    </>
  );
}
