
import React, { FC }  from "react";
import dynamic from "next/dynamic";

import '@dexhunterio/swaps/lib/assets/style.css'

import token from "@/verified/token";

const Swap = dynamic(() => import("@dexhunterio/swaps"), {
  ssr: false,
});

interface BuyTokenProps {
  info: token;
}

const BuyToken: FC<BuyTokenProps> = ({ info }) => {
  const full_policy = info.token_informtion.policy_id_full as string;
  let policy_to_use = full_policy;

  if (!info || policy_to_use.length == 0) {
    return null;
  }

  // should only be empty, after checks, when on dexhunter token
  switch (info.slug) {
    case 'hunt':
      policy_to_use = "";
      break;
    default:
      break;
  }

  return (
    <div className="grid grid-cols-1 grid-rows-1 md:place-items-center">
      {
        <Swap
          orderTypes={["SWAP","LIMIT","DCA"]}
          defaultToken={policy_to_use}
          colors={{"background":"#0a0a0a","containers":"#262626","subText":"#a78bfa","mainText":"#e5e5e5","buttonText":"#0a0a0a","accent":"#a78bfa"}}
          theme="dark"
          partnerCode="unity6164647231717833386e74637a6d6c6b646e79716d3738616365663739306a7271723965686a79737932357472727876686165383964363239306e637a6e30793479637961736c613238737171727470797476337675753075716a34797533377139327275646cda39a3ee5e6b4b0d3255bfef95601890afd80709"
          partnerName="Unity"
          displayType="DEFAULT"
          className="max-w-full"
        />
      }

      <div className="py-4 text-center">
        <h3 className="text-sm text-black dark:text-neutral-400">
          When buying or selling within Unity, there is a 0.2% added fee to help support the platform.
        </h3>
        <code className={`text-sm dark:text-violet-400 font-bold`}>
          Every 1 ADA spent is 0.002 as fee
        </code>
      </div>

      {/* KBD shortcuts for DexHunter */}
      {/* lets hide this for now
      <div>
        <div className="flex flex-col justify-center">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    
                  <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                      <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-neutral-600">Q</kbd>
                      </td>
                      <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        <h3 className={`text-sm ${main_theme.gradient_text} flex justify-center font-bold pb-1`}>- 1% Slippage</h3>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                      <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-neutral-600">E</kbd>
                      </td>
                      <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        <h3 className={`text-sm ${main_theme.gradient_text} flex justify-center font-bold pb-1`}>+ 1% Slippage</h3>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                      <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-neutral-600">P</kbd>
                      </td>
                      <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        <h3 className={`text-sm ${main_theme.gradient_text} flex justify-center font-bold pb-1`}>Swap Price</h3>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                      <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-neutral-600">K</kbd>
                      </td>
                      <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        <h3 className={`text-sm ${main_theme.gradient_text} flex justify-center font-bold pb-1`}>Swap Buy/Sell</h3>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                      <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-neutral-600">S</kbd>
                      </td>
                      <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        <h3 className={`text-sm ${main_theme.gradient_text} flex justify-center font-bold pb-1`}>Settings</h3>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
};

export default BuyToken;