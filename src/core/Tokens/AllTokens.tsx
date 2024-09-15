"use client"

import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Chip from "@/components/Chip";
import Icon from "@/components/Icons";
import ToolTip from "@/components/Tooltip";
import token from "@/verified/token";
import { FC, useState } from "react";

const AllTokens: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTokens = token.filter((item) =>
    item.information.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.information.ticker.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Breadcrumb active_page="Tokens"/>

      <div className="py-4 px-2">

        <div className="flex justify-between items-center w-full">
          <h3 className={`text-xl font-bold text-black dark:text-neutral-300`}>
            All <span className={` `}>Verified</span> Tokens
          </h3>

          <div className="max-w-sm flex items-center">
            <ToolTip text="You can search using Name, Ticker or Category.">
              <Icon icon="info" extra_class="size-6 mr-4 text-neutral-600" bold_type="bold"/>
            </ToolTip>

            <input
              type="text" 
              placeholder="Search Tokens..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-2 px-4 block w-full border-neutral-600 rounded-md text-sm dark:bg-neutral-900/30 border dark:border-neutral-800 dark:text-neutral-300 dark:placeholder-neutral-600 dark:focus:border-violet-400"
            />
          </div>
        </div>

        <div className="flex mx-auto gap-4 gap-y-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          { filteredTokens.map((group, i) => {
          let url = '';
          let url_txt = '';
          if (group.links.website) {
            url = group.links.website as string;
            url_txt = 'Website';
          } else if (group.links.twitter) {
            url = group.links.twitter as string;
            url_txt = 'Twitter';
          }

          return (
            <Card key={i} hover_effect>
              <div className="p-1">
                <h3 className="text-lg font-medium dark:text-neutral-200 pl-1 flex gap-2 items-center justify-center">
                  {group.information.name}
                </h3>

                <h3 className="text-lg font-bold tracking-wider pl-1 flex gap-2 items-center justify-center bg-clip-text bg-gradient-to-bl text-transparent from-blue-600 to-violet-500 dark:from-pink-200 dark:to-violet-600">
                  {'[' + group.information.ticker + ']'}
                </h3>

                <div className="flex justify-center rounded-md m-2">
                  <img src={group.images.logo} className="border-2 border-slate-300 dark:border-neutral-800 rounded-lg h-16 w-16"/>
                </div>

                <div className="flex justify-center pt-2">
                  <Chip text={group.category} size="xs"/>
                </div>

                <p className="p-2 mb-4 text-gray-500 dark:text-neutral-400 h-20 overflow-y-auto mt-4 px-2 text-center text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                  {group.information.description}
                </p>

                  <div className="-mb-6 flex justify-center gap-4">
                    <Button text="Explore" size="xs" url={'/tokens/' + group.slug}/>

                    <Button text={url_txt} size="xs" url={url} target="_blank"/>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTokens;