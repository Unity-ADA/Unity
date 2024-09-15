import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import TokenIndex from "@/core/Tokens";

export const metadata: Metadata = {
  title: "Token | Unity",
};

export default function TokenPage() {

  return (
    <>
      <DefaultLayout>
        <TokenIndex/>
      </DefaultLayout>
    </>
  );
}
