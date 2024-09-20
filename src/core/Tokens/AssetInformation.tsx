


import Button from "@/components/Button";
import Icon from "@/components/Icons";
import ToolTip from "@/components/Tooltip";
import FormatToReadableNumber from "@/utils/FormatToReadableNumber";
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
      data: [FormatToReadableNumber(info.token_informtion.supply), info.token_informtion.supply.toString()]
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
        <div className="my-1 flex flex-col gap-y-2">
          { core_informtion.map((item, i) => (
            <div
              key={i}
              className="flex gap-2 items-center cursor-copy border-2 px-2 py-1 border-slate-300 dark:border-neutral-800 rounded-md hover:bg-neutral-300 hover:dark:bg-neutral-900/70 hover:scale-105 transition-all duration-300"
              onClick={() => {
                let textToCopy = '';
                if (Array.isArray(item.data) && item.data[1]) {
                  textToCopy = item.data[1];
                } else if (typeof item.data === 'string') {
                  textToCopy = item.data;
                } else {
                  textToCopy = item.data.toString(); // or handle this case as needed
                }
                navigator.clipboard.writeText(textToCopy);
              }}
            >
              <Icon icon="copy" extra_class="size-4"/>

              <span className="truncate max-w-50 text-xs tracking-wider">
                <span className="uppercase uppercase">{item.title + ': '}</span>

                <code className="text-sm tracking-widest font-bold dark:text-violet-400">
                  {(Array.isArray(item.data) && item.data[1]) ? item.data[0] : item.data}
                </code>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetInformation;