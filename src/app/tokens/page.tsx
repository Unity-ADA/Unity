import { Metadata } from "next";
import DefaultLayout from "@/layout/DefaultLayout";
import AllTokens from "@/core/Tokens/AllTokens";

export const metadata: Metadata = {
  title: "All Tokens | Unity",
};

export default function TokenPage() {

  return (
    <>
      <DefaultLayout>
        <AllTokens/>
      </DefaultLayout>
    </>
  );
}
