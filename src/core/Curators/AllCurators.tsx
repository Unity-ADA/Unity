"use client"

import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Icon from "@/components/Icons";
import ToolTip from "@/components/Tooltip";
import curator from "@/verified/curator";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

const AllCurators: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCurators = curator.filter((item) =>
    item.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const divRef = useRef<HTMLDivElement>(null);
  const [divDimensions, setDivDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (divRef.current) {
      setDivDimensions({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <div>
      <Breadcrumb active_page="Curators"/>

      <div className="py-4 px-2">

        <div className="flex justify-between items-center w-full">
          <h3 className={`text-xl font-bold text-black dark:text-neutral-300`}>
            All <span className={` `}>Unity</span> Curators
          </h3>

          <div className="max-w-sm flex items-center">
            <ToolTip text="You can search using Name.">
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

        <div className="flex mx-auto gap-4 gap-y-6 md:mt-8 flex-wrap justify-center">
          { filteredCurators.map((group, i) => {
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
              <div className="flex rounded-lg flex-row gap-4 items-center w-70">
                <div ref={divRef} className="flex items-center justify-center w-14 h-14 p-1 dark:bg-neutral-900/70 rounded-lg ">
                  {divDimensions.width > 0 && divDimensions.height > 0 && (
                    <Image src={group.images.logo} width={divDimensions.width} height={divDimensions.height} unoptimized alt="Pool Image"/>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-medium dark:text-neutral-200 py-1 flex gap-2 justify-center">
                    {group.curator_information.name}
                  </h3>

                  <div className="flex gap-2 justify-center -mb-7">
                    <Button text="Explore" size="xs" url={'/curators/' + group.id}/>
                    <Button text={url_txt} size="xs" url={url} target="_blank"/>
                  </div>
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

export default AllCurators;