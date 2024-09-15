"use client"

import React, { FC, useEffect, useState } from "react";
import { redirect, usePathname } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import curator from "@/verified/curator";
import Header from "@/components/Header";
import CuratorsSocial from "./Social";
import Card from "@/components/Card";
import token from "@/verified/token";
import pool from "@/verified/pool";
import Link from "next/link";
import Button from "@/components/Button";

const CuratorsIndex: FC = () => {
  const slug = usePathname();
  const slug_ref = slug.split('/').pop() as string;

  const curator_info = curator.find(c => c.id === slug_ref);
  if (!curator_info) {
    redirect('/');
  }

  return (
    <div className="">
      <Breadcrumb sub_page_1="Curators" active_page={`${slug_ref}`}/>

      <div className="py-4 px-2">
        <Header curator={curator_info}/>

        <div className="p-5">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            <div className="flex flex-col min-w-60">
              <div className="sm:order-none order-3">
                <CuratorsSocial info={curator_info}/>
              </div>
            </div>

            <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
              <div className="py-3">
                <h2 className="text-lg font-bold text-top-color">
                  About
                  <span className="bg-clip-text bg-gradient-to-bl text-transparent from-blue-600 to-violet-500 dark:from-pink-200 dark:to-violet-600">
                    {' ' + curator_info.curator_information.name}
                  </span>
                </h2>
                <div className="border-2 w-20 border-top-color mt-1 mb-3"></div>

                <p className="p-2 mb-4 text-gray-500 dark:text-neutral-400 max-h-25 overflow-y-auto mt-4 px-2 text-sm [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-300 [&::-webkit-scrollbar-thumb]:bg-slate-400 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                  {curator_info.curator_information.description}
                </p>

                <h2 className="text-center text-sm font-bold text-top-color uppercase tracking-wider">
                  <span>Curated Tokens</span>
                </h2>

                <div className="py-2 flex flex-wrap gap-2 justify-center">
                  { token.map((item, i) => {
                    const is_a_curation = item.curated_by.includes(curator_info.id);
                    if (!is_a_curation) return null;
                    return (
                      <Button key={i} text={'$' + item.information.ticker} size="xs" url={'/tokens/' + item.slug}/>
                    )
                  })}
                </div>

                <h2 className="mt-2 text-center text-sm font-bold text-top-color uppercase tracking-wider">
                  <span>Curated Pools</span>
                </h2>

                <div className="py-2 flex flex-wrap gap-4 justify-center">
                  { pool.map((item, i) => {
                    const is_a_curation = item.curated_by.includes(curator_info.id);
                    if (!is_a_curation) return null;
                    return (
                      <Button key={i} text={'$' + item.information.ticker} size="xs" url={'/pools/' + item.slug}/>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuratorsIndex;