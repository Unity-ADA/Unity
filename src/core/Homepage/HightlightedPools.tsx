import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import { FC, useEffect, useRef, useState } from "react";
import Chip from "@/components/Chip";
import token from "@/verified/token";
import Link from "next/link";
import Button from "@/components/Button";
import { nanoid } from "nanoid";
import pool from "@/verified/pool";
import Image from "next/image";
import { HIGHLIGHTED_POOLS } from "@/consts/global";

const HighlightedPools: FC = () => {

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
    <>
      {pool
        .filter((group) => HIGHLIGHTED_POOLS.includes(group.slug))
        .map((group, i) => {
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
              <div className="flex rounded-lg flex-row gap-4 items-center min-w-70">
                <div ref={divRef} className="flex items-center justify-center w-14 h-14 p-1 dark:bg-neutral-900/70 rounded-lg ">
                  {divDimensions.width > 0 && divDimensions.height > 0 && (
                    <Image src={group.images.logo} width={divDimensions.width} height={divDimensions.height} unoptimized alt="Pool Image"/>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-medium dark:text-neutral-200 text-center tracking-wide">
                    {group.information.name}
                  </h3>

                  <h3 className="text-md font-bold tracking-wider text-center dark:text-violet-400 pb-2">
                    {'[' + group.information.ticker + ']'}
                  </h3>

                  <div className="flex gap-2 justify-center -mb-5">
                    <Button text="Explore" size="xs" url={'/pools/' + group.slug}/>
                    <Button text={url_txt} size="xs" url={url} target="_blank"/>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
    </>
  );
};

export default HighlightedPools;