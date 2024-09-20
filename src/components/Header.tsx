

import Chip from "@/components/Chip";
import curator from "@/verified/curator";
import pool from "@/verified/pool";
import token from "@/verified/token";
import { FC } from "react";

interface HeaderProps {
  token?: token;
  pool?: pool;
  curator?: curator;
}

const Header: FC <HeaderProps> = ({ token, pool, curator }) => {
  let header_image = "https://pbs.twimg.com/profile_banners/1586189651693522944/1722296681/1500x500";
  let name = "";
  let ticker = "";
  let category = "";
  let logo = "";
  let type = ""

  if (token) {
    name = token.information.name;
    ticker = token.information.ticker;
    category = token.category;
    logo = token.images.logo;
    type = "Token";
    if (token.images.header) { header_image = token.images.header; }
  }

  if (pool) {
    name = pool.information.name;
    ticker = pool.information.ticker;
    logo = pool.images.logo;
    type = "Pool";
    if (pool.images.header) { header_image = pool.images.header; }
  }

  if (curator) {
    name = curator.curator_information.name;
    logo = curator.images.logo;
    type = "Curator";
    if (curator.images.header) { header_image = curator.images.header; }
  }

  return (
    <div className="flex rounded-t-lg bg-top-color w-full relative">
      <div className="absolute inset-0">
        <img
          src={header_image}
          alt="Header Image"
          className="h-full w-full object-cover object-center rounded-lg"
        />

        <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-950 opacity-50 dark:opacity-70"></div>
      </div>
  
      <div className="h-40 w-40 rounded-lg sm:relative sm:p-0 top-10 left-5 p-3 z-1">
        <img src={logo}/>
      </div>

      <div className="w-2/3 sm:text-center px-5 mt-10 text-start z-1 py-2">
        <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl my-0.5">
          {name}
        </p>

        {(token || pool) && (
          <h3 className="font-poppins tracking-wider font-bold text-heading text-xl my-0.5 justify-center dark:text-violet-400">
            {'[' + ticker + ']'}
          </h3>
        )}

        <div className="flex flex-col md:flex-row md:justify-center gap-2">
          <div className="">
            <Chip text={type} size="xs"/>
          </div>
          <div className="">
            {token && (<Chip text={category} size="xs"/>)}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;