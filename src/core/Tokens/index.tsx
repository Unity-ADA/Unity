"use client"

import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

import token from "@/verified/token";
import Header from "../../components/Header";
import TokenSocial from "./Social";
import AssetInformation from "./AssetInformation";
import BuyToken from "./BuyToken";
import curator from "@/verified/curator";
import ToolTip from "@/components/Tooltip";
import Icon from "@/components/Icons";
import Breadcrumb from "@/components/Breadcrumb";
import { AssetFingerprint } from "@/utils/api/PoolPm";
import FormatAtomic from "@/utils/FormatAtomic";
import FormatUnixTime from "@/utils/FormatUnixTime";
import Card from "@/components/Card";

const TokenIndex: FC = () => {
  const slug = usePathname();
  const slug_ref = slug.split('/').pop() as string;

  const token_info = token.find(t => t.slug === slug_ref);
  if (!token_info) {
    redirect('/');
  }

  const curators = curator.filter(c => token_info.curated_by.includes(c.id));
  const fingerprint = token_info.token_informtion.fingerprint;

  const [dataState, setDataState] = useState<AssetFingerprint>({
    decimals: 0, epoch: 0, fingerprint: '', ftks: [],
    label: 0, metadata: {}, mint: 0, name: '',
    owner: '', policy: '', quantity: 0, tk: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (fingerprint) {
          const data: any = await AssetFingerprint(fingerprint);
          setDataState(data);
        }
      } catch (e) {
        console.error('[/index.tsx] - An error occurred while fetching AssetFingerprint: ', e);
      }
    };

    fetchData().catch((e) => {
      console.error('[/index.tsx] - An error occurred with fetchData: ', e);
    });
  }, [fingerprint]);

  function useAtomic(slug_ref: string) {
    const tokens_to_atmoic = [
      "usdm", "minswap"
    ];

    if (tokens_to_atmoic.includes(slug_ref)) {
      return FormatAtomic(dataState.decimals, dataState.quantity);
    }
    return dataState.quantity;
  }

  interface statistics {
    title: string;
    data: string | number;
  }

  const statistics: statistics[] = [
    {
      title: "Total Supply",
      data: useAtomic(slug_ref).toLocaleString(undefined, { maximumFractionDigits: dataState.decimals })
    },
    {
      title: "Date Minted",
      data: FormatUnixTime(dataState.mint)
    },
    {
      title: "Minters Address",
      data: dataState.owner
    },
  ];

  return (
    <div>
      <Breadcrumb sub_page_1="Tokens" active_page={`${slug_ref}`}/>

      <div className="py-4 px-2">
        <Header token={token_info}/>

        <div className="p-5">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            <div className="flex flex-col min-w-60">
              <div className="sm:order-none order-3">
                <TokenSocial info={token_info}/>
              </div>

              { token_info.token_informtion.policy_id &&
                <div className="sm:order-none order-2">
                  <AssetInformation info={token_info}/>
                </div>
              }

              <div className="sm:order-none">
                <h2 className="flex justify-between items-center text-lg font-bold text-top-color px-2">
                  <span>Curators</span>
                  <ToolTip text="Curators help gather information in order to be verified on Unity.">
                    <Icon icon="info" extra_class="size-6" bold_type="bold"/>
                  </ToolTip>
                </h2>

                <div className="border-2 mx-24 border-top-color mt-1 mb-3"/>

                <div className="flex flex-wrap gap-2 py-2">
                  { curators.map((curator, i) => (
                    <Link key={i} href={'/curators/' + curator.id}>
                      <img src={curator.images.logo} className="h-12 w-12 rounded-lg hover:scale-105 transition-all duration-300"/>
                    </Link>
                  ))}
                </div>

              </div>
            </div>

            <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
              <div className="py-3">
                <h2 className="text-lg font-bold text-top-color">
                  About
                  <span className="bg-clip-text bg-gradient-to-bl text-transparent from-blue-600 to-violet-500 dark:from-pink-200 dark:to-violet-600">
                    {' ' + token_info.information.name}
                  </span>
                </h2>
                <div className="border-2 w-20 border-top-color mt-1 mb-3"></div>
                
                <p className="p-2 mb-4 text-gray-500 dark:text-neutral-400 max-h-25 overflow-y-auto mt-4 px-2 text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                  {token_info.information.description}
                </p>

                <div className="py-2 flex flex-wrap gap-4 justify-center">
                  {token_info.token_informtion.policy_id && statistics.map((item, i) => {
                    return (
                      <Card key={i} hover_effect>
                        <a href={i === 2 ? 'https://pool.pm/' + item.data : undefined} target={i === 2 ? '_blank' : undefined}>
                          <div className="flex flex-col items-center py-2 md:px-4 rounded-lg">
                            <div className="max-w-45 md:max-w-60 truncate px-1">
                              <span className="text-lg font-bold text-center tracking-wider bg-clip-text bg-gradient-to-bl text-transparent from-blue-600 to-violet-500 dark:from-pink-200 dark:to-violet-600">{item.data}</span>
                            </div>
                            <div className="text-sm mx-auto tracking-widest">
                              <span className="text-gray-500">{item.title}</span>
                            </div>
                          </div>
                        </a>
                      </Card>
                    )
                  })}
                </div>
              </div>

              { token_info.token_informtion.policy_id &&
                <div className="py-4">
                  <BuyToken info={token_info}/>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenIndex;