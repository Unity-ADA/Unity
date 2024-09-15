"use client";

import { FC } from "react";
import Hero from "./Hero";
import HighlightedTokens from "./HightlightedTokens";
import HighlightedPools from "./HightlightedPools";
import HighlightedApps from "./HightlightedApps";
import StatsCard from "./StatsCards";
import TextLink from "@/components/TextLink";
import Breadcrumb from "@/components/Breadcrumb";

const Homepage: FC = () => {

  return (
    <div>
      <Breadcrumb/>

      <Hero/>

      <div className="my-10 lg:px-20 lg:mb-20">
        <StatsCard/>
      </div>

      <div className="my-10">
        <div>
          <div className="flex gap-2 items-center pb-2 px-2">
            <h3 className="text-lg text-neutral-600 dark:text-neutral-200 font-medium tracking-wider">Verified Pools</h3>

            <TextLink text="View All" size="sm" url="/pools/"/>
          </div>

          <div className="flex flex-wrap gap-4 gap-y-5 justify-center">
            <HighlightedPools/>
          </div>
        </div>
      </div>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="px-1">
          <div className="flex gap-2 items-center pb-2 px-2">
            <h3 className="text-lg text-neutral-600 dark:text-neutral-200 font-medium tracking-wider">Verified Tokens</h3>

            <TextLink text="View All" size="sm" url="/tokens/"/>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 gap-y-6">
            <HighlightedTokens/>
          </div>
        </div>

        <div className="px-1">
          <div className="flex gap-2 items-center pb-2 px-2">
            <h3 className="text-lg text-neutral-600 dark:text-neutral-200 font-medium tracking-wider">Verified Apps</h3>

            <TextLink text="View All" size="sm" url="/apps/"/>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 gap-y-6">
            <HighlightedApps/>
          </div>
        </div>
      </div>


      <div className="my-10">
      </div>


    </div>
  );
};

export default Homepage;
