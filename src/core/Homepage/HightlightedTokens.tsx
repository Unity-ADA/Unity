import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import { FC } from "react";
import Chip from "@/components/Chip";
import token from "@/verified/token";
import Link from "next/link";
import Button from "@/components/Button";
import { nanoid } from "nanoid";
import { HIGHLIGHTED_TOKENS } from "@/consts/global";

const HighlightedTokens: FC = () => {

  return (
    <>
      { token
        .filter((group) => HIGHLIGHTED_TOKENS.includes(group.slug))
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
              <div className="p-1">
                <h3 className="text-lg font-medium dark:text-neutral-200 text-center tracking-wide">
                  {group.information.name}
                </h3>

                <h3 className="text-md font-bold tracking-wider text-center dark:text-violet-400">
                  {'[' + group.information.ticker + ']'}
                </h3>

                <div className="flex justify-center rounded-md m-2">
                  <img src={group.images.logo} className="border-2 border-slate-300 dark:border-neutral-800 rounded-lg h-16 w-16"/>
                </div>

                <div className="flex justify-center pt-2">
                  <Chip text={group.category} size="xs"/>
                </div>

                <p className="p-2 mb-4 text-gray-500 dark:text-neutral-400 h-25 overflow-y-auto mt-4 px-2 text-center text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                  <code>{group.information.description}</code>
                </p>

                <div className="-mb-6 flex justify-center gap-4">
                  <Button text="Explore" size="xs" url={'/tokens/' + group.slug}/>
                  <Button text={url_txt} size="xs" url={url} target="_blank"/>
                </div>
              </div>
            </Card>
          );
        })}
    </>
  );
};

export default HighlightedTokens;