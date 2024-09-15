import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import PoolIndex from "@/core/Pools";

export const metadata: Metadata = {
  title: "Pool | Unity",
};

export default function TokenPage() {

  return (
    <>
      <DefaultLayout>
        <PoolIndex/>
      </DefaultLayout>
    </>
  );
}
