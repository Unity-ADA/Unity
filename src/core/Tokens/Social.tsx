import Button from "@/components/Button";

import token from "@/verified/token";
import { FC } from "react";

interface TokenSocialProps {
  info: token;
}

const TokenSocial: FC <TokenSocialProps> = ({ info }) => {

  return (
    <div className="py-3 px-2 mr-4">
      <h2 className="text-lg font-bold text-top-color text-center">Social Connections</h2>
      <div className="border-2 mx-20 border-top-color mt-1 mb-3"/>

      <div className=" ">
        <div className="my-1 flex flex-col gap-y-2">
          { Object.entries(info.links).map(([item, url], i) => (
            url && (
              <Button
                key={i}
                text={item.toUpperCase()}
                size="xs"
                icon={item}
                class_extra="tracking-wider"
                bold_type="medium"
                url={url}
                target="_blank"
              />
            )
          ))}
        </div>

      </div>
    </div>
  );
};

export default TokenSocial;