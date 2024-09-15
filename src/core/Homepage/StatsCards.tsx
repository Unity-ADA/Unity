"use client";

import Card from "@/components/Card";
import Icon from "@/components/Icons";
import { ADA_ATOMIC_UNIT } from "@/consts/global";
import { Total } from "@/utils/api/PoolPm";
import curator from "@/verified/curator";
import external from "@/verified/external";
import pool from "@/verified/pool";
import token from "@/verified/token";
import { randomInt } from "crypto";
import { FC, useEffect, useState } from "react";

const StatsCard: FC = () => {
  const [totalData, setTotalData] = useState<Total | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Total();
        setTotalData(data);
      } catch (e) {
        console.error('[/StatsCard.tsx] - An error occurred while fetching Total(): ', e);
      }
    };
 
    fetchData().catch((e) => {
      console.error('[/StatsCard.tsx] - An error occurred with fetchData: ', e)
    })
  }, [])

  const NA = "N/A";
  const has_data = totalData != null;

  interface items_prop {
    title: string;
    data: string | number;
  }

  const items: items_prop[] = [
    {
      title: "Verified Tokens",
      data: (token.length).toLocaleString()
    },
    {
      title: "Verified Pools",
      data: (pool.length).toLocaleString()
    },
    {
      title: "Verified Apps",
      data: (external.length).toLocaleString()
    },
    {
      title: "Curators",
      data: (curator.length).toLocaleString()
    },
    {
      title: "Cardano Price (£GBP)",
      data: has_data ? `£${totalData.ADAGBP}` : NA
    },
    {
      title: "Cardano Marketcap (£GBP)",
      data: has_data ? `£${((totalData.ADAGBP * totalData.supply) / ADA_ATOMIC_UNIT).toLocaleString(undefined, { maximumFractionDigits: 0 })}` : NA
    },
    {
      title: "Delegated Wallets",
      data: has_data ? `${(totalData.delegations).toLocaleString()}` : NA
    },
    {
      title: "Circulating Supply",
      data: has_data ? `${((totalData.supply) / ADA_ATOMIC_UNIT).toLocaleString(undefined, { maximumFractionDigits: 0 })}` : NA
    },
    {
      title: "Cardano Staked",
      data: has_data ? `${((totalData.stake) / ADA_ATOMIC_UNIT).toLocaleString(undefined, { maximumFractionDigits: 0 })}` : NA
    },
    {
      title: "Total Supply",
      data: (45000000000).toLocaleString(undefined, { maximumFractionDigits: 0 })
    },
  ];

  function random_color(): string {
    const index = Math.floor(Math.random() * items.length);
    const colors = ["-green-200", "-red-200", "-blue-200"];
    return colors[index % colors.length];
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => {
        let icn = "money_solid";
        if (index == 0 || index == 7 || index == 9) { icn = "coin_solid"; }
        else if (index == 1 || index == 8) { icn = "pool_solid"; }
        else if (index == 2) { icn = "app_solid"; }
        else if (index == 3) { icn = "curator_solid"; }

        return (
        <div key={index} className={`${index == 4 ? 'lg:col-start-2' : null} ${index == 6 ? 'lg:col-start-1' : null}`}>
          <Card hover_effect>
            <div className="flex items-center py-2 px-4 rounded-lg group">
              <div className={`dark:bg-neutral-900/70 flex flex-shrink-0 items-center justify-center h-10 w-10 rounded`}>
                <Icon icon={icn} extra_class="size-6 dark:fill-neutral-300 transition-all duration-300 group-hover:dark:fill-violet-400"/>
              </div>

              <div className="flex-grow flex flex-col ml-4">
                <span className="text-lg font-bold text-center tracking-wider bg-clip-text bg-gradient-to-bl text-transparent from-blue-600 to-violet-500 dark:from-pink-200 dark:to-violet-600">{item.data}</span>
                <div className="flex text-sm items-center justify-between mx-auto tracking-widest">
                  <span className="text-gray-500">{item.title}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )})}
    </div>
  );
};

export default StatsCard;