"use client"

import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

import pool from "@/verified/pool";

import curator from "@/verified/curator";
import ToolTip from "@/components/Tooltip";
import Icon from "@/components/Icons";
import Breadcrumb from "@/components/Breadcrumb";
import AssetInformation from "../Tokens/AssetInformation";
import Header from "@/components/Header";
import { PoolData } from "@/utils/api/PoolPm";
import PoolInformation from "./PoolInformation";
import PoolSocial from "./Social";

const PoolIndex: FC = () => {
  const slug = usePathname();
  const slug_ref = slug.split('/').pop() as string;

  const pool_info = pool.find(p => p.slug === slug_ref);
  if (!pool_info) {
    redirect('/');
  }

  const curators = curator.filter(c => pool_info.curated_by.includes(c.id));

  const [dataState, setDataState] = useState<PoolData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any = await PoolData(pool_info.pool_information.pool_id);
        setDataState(data);
      } catch (e) {
        console.error('An error occurred while fetching PoolData: ', e);
      }
    };

    fetchData().catch((e) => {
      console.error('[/index.tsx] - An error occurred while fetching PoolData: ', e);
    });
  }, []);

  return (
    <div className="">
      <Breadcrumb sub_page_1="Pools" active_page={`${slug_ref}`}/>

      <div className="py-4 px-2">
        <Header pool={pool_info}/>

        <div className="p-5">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            <div className="flex flex-col">
              <div className="sm:order-none order-3">
                <PoolSocial info={pool_info}/>
              </div>

              <div className="sm:order-none md:w-50">
                <h2 className="flex justify-between items-center text-lg font-bold text-top-color">
                  <span>Curators</span>
                  <ToolTip text="Curators help gather information in order to be verified on Unity.">
                    <Icon icon="info" extra_class="size-6" bold_type="bold"/>
                  </ToolTip>
                </h2>

                <div className="border-2 mx-6 border-top-color mt-1 mb-3"/>

                <div className="flex flex-wrap gap-2 py-2">
                  { curators.map((curator, i) => (
                    <Link key={i} href={'/curators/' + curator.id}>
                      <img src={curator.images.logo} className="h-12 w-12 rounded-lg hover:scale-105 transition-all duration-300"/>
                    </Link>
                  ))}
                </div>

              </div>
            </div>

            <div className="flex flex-col order-first sm:order-none sm:-mt-10">
              <div className="py-3">
                { dataState != undefined && (<PoolInformation pool_info={dataState}/>)}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolIndex;