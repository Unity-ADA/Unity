


import Button from "@/components/Button";
import Icon from "@/components/Icons";
import ToolTip from "@/components/Tooltip";
import { copy_to_clipboard, format_big_number } from "@/utils/StringUtils";
import token from "@/verified/token";
import Link from "next/link";
import { title } from "process";
import { FC } from "react";

interface AssetInformationProps {
  info: token;
}

const AssetInformation: FC <AssetInformationProps> = ({ info }) => {
  interface core_informtion {
    title: string;
    data: string | string[] | number;
  }

  const core_informtion: core_informtion[] = [
    {
      title: "Circulating",
      data: [format_big_number(info.token_informtion.supply), info.token_informtion.supply.toString()]
    },
    {
      title: "Decimals",
      data: info.token_informtion.decimals
    },
    {
      title: "Fingerprint",
      data: info.token_informtion.fingerprint
    },
    {
      title: "Policy",
      data: info.token_informtion.policy_id
    },
    {
      title: "Policy Ext.",
      data: info.token_informtion.policy_id_full
    },
  ];

  return (
    <div className="py-3 px-2">
      <h2 className="flex justify-between items-center text-lg font-bold text-top-color">
        <span>Asset Information</span>
        <ToolTip text="Clicking the box will copy the value.">
          <Icon icon="info" extra_class="size-6" bold_type="bold"/>
        </ToolTip>
      </h2>

      <div className="border-2 mx-20 border-top-color mt-1 mb-3"/>

      <div className=" ">
        <div className="my-1 flex flex-row flex-col w-60 gap-y-2">

          {core_informtion.map((item, i) => {
            const data_as_str = (Array.isArray(item.data) && item.data[1]) ? item.data[0] as string : item.data as string;
            const full_str = item.title + ": " + data_as_str;
            let textToCopy = '';
            if (Array.isArray(item.data) && item.data[1]) {
              textToCopy = item.data[1];
            } else if (typeof item.data === 'string') {
              textToCopy = item.data;
            } else {
              textToCopy = item.data.toString();
            }

            return (
              <div key={i} onClick={() => copy_to_clipboard(textToCopy)}>
                <Button text={full_str} size="xs" class_extra="cursor-copy"/>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default AssetInformation;