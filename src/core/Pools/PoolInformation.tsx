


import { FC, useState } from "react";
import { PoolData } from "@/utils/api/PoolPm";
import Card from "@/components/Card";
import Icon from "@/components/Icons";
import { ADA_ATOMIC_UNIT } from "@/consts/global";
import TextLink from "@/components/TextLink";
import Button from "@/components/Button";
import Link from "next/link";
import ToolTip from "@/components/Tooltip";
import { format_unix_time } from "@/utils/StringUtils";

interface PoolInformationProps {
  pool_info: PoolData;
}

const PoolInformation: FC <PoolInformationProps> = ({ pool_info }) => {

  const [currentStakersPage, setCurrentStakersPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [sortedStakers, setSortedStakers] = useState([...pool_info.stakers]);
  const [has_sorted_by_high, setHasSortedByHigh] = useState(false);

  const sortBy = (type: string) => {
    let newSortedStakers = [...sortedStakers];
    if (type === 'amount') {
      if (has_sorted_by_high) {
        newSortedStakers.sort((a, b) => a.amount - b.amount);
      } else {
        newSortedStakers.sort((a, b) => b.amount - a.amount);
      }
    } else if (type === 'time') {
      if (has_sorted_by_high) {
        newSortedStakers.sort((a, b) => a.time - b.time);
      } else {
        newSortedStakers.sort((a, b) => b.time - a.time);
      }
    }
    setSortedStakers(newSortedStakers);
    setHasSortedByHigh(!has_sorted_by_high);
  };
  
  const last_item_index = currentStakersPage * itemsPerPage;
  const first_item_index = last_item_index - itemsPerPage;
  const current_stakers_index = sortedStakers.slice(first_item_index, last_item_index);

  const page_numbers = [];
  for (let i = 1; i <= Math.ceil(sortedStakers.length / itemsPerPage); i++) {
    page_numbers.push(i);
  }

  const resetData = () => {
    setSortedStakers(pool_info.stakers);
  };

  interface stats {
    title: string;
    data: string | number;
  };

  const stats: stats[] = [
    {
      title: "Total Delegators",
      data: pool_info.delegators_no
    },
    {
      title: "Total Stake",
      data: '₳' + (pool_info.stake_total as number / ADA_ATOMIC_UNIT).toLocaleString(undefined, { maximumFractionDigits: 0 })
    },
    {
      title: "Status",
      data: pool_info.isActive ? "Active" : "Retired"
    },
  ];

  if (!pool_info.isActive && pool_info.retired) {
    stats.push({
      title: "Retired",
      data: pool_info.retired
    });
  }

  return (
    <div>
      <div className="mt-2">
        <h3 className="text-lg text-neutral-600 dark:text-neutral-200 font-medium tracking-wider text-center">
          Pool Statistics
        </h3>
      </div>

      <div className="py-2 flex flex-wrap gap-4 justify-center">

        {stats.map((item, index) => {
          let icn = "money_solid";
          if (index == 0 || index == 7 || index == 9) { icn = "coin_solid"; }
          else if (index == 1 || index == 8) { icn = "pool_solid"; }
          else if (index == 2) { icn = "app_solid"; }
          else if (index == 3) { icn = "curator_solid"; }

          return (
            <div key={index}>
              <Card hover_effect>
                <div className="flex items-center py-2 md:px-4 mx-2 rounded-lg group md:w-70 w-50">
                  <div className={`dark:bg-neutral-900/70 flex flex-shrink-0 items-center justify-center h-10 w-10 rounded`}>
                    <Icon icon={icn} extra_class="size-6 dark:fill-neutral-200 transition-all duration-300 group-hover:dark:fill-violet-400"/>
                  </div>

                  <div className="flex-grow flex flex-col ml-4">
                    <code className="text-lg font-bold text-center tracking-wider bg-clip-text bg-gradient-to-bl text-transparent from-blue-600 to-violet-500 dark:from-pink-200 dark:to-violet-600">{item.data}</code>
                    <div className="flex text-sm items-center justify-between mx-auto tracking-widest">
                      <span className="text-gray-500">{item.title}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )
        })}
      </div>

      <div className="mt-4 flex justify-between items-center lg:px-20">
        <span className="text-lg font-bold text-top-color">Active Stakers</span>
        <div className="flex flex-wrap gap-x-1 md:gap-x-2 items-center flex-row">
          <h3 className="text-sm font-bold tracking-wider uppercase hidden md:block">Sort by:</h3>
          <div onClick={() => sortBy('amount')}>
            <ToolTip text="Highest - Lowest | Lowest - Highest">
              <Button icon="coin_solid" size="xs" class_extra="cursor-pointer fill-neutral-300 hover:fill-violet-400"/>
            </ToolTip>
          </div>

          <div onClick={() => sortBy('time')}>
            <ToolTip text="Latest - Earliest | Earliest - Latest">
              <Button icon="time_solid" size="xs" class_extra="cursor-pointer fill-neutral-300 hover:fill-violet-400"/>
            </ToolTip>
          </div>

          <div onClick={resetData}>
            <ToolTip text="Reset">
              <Button icon="no_symbol_solid" size="xs" class_extra="cursor-pointer fill-neutral-300 hover:fill-violet-400"/>
            </ToolTip>
          </div>
        </div>
      </div>

      <div className="py-2 flex flex-wrap gap-4 justify-center">
        { current_stakers_index.map((group, i) => {
          return (
            <Link key={i} href={'https://pool.pm/' + group.address} target="_blank">
              <Card hover_effect>
                <div className="flex items-center py-2 md:px-4 mx-2 rounded-lg group md:w-70">
                  <div className="flex-grow flex flex-col items-center">
                    <div className="text-md">
                      <span>Live Stake: </span>
                      <code className="text-sm font-bold text-center tracking-wider dark:text-violet-400">
                        ₳{(group.amount / ADA_ATOMIC_UNIT).toLocaleString(undefined, { minimumFractionDigits: 6, maximumFractionDigits: 6 })}
                      </code>
                    </div>
                    <div className="text-md">
                      <span>Total Reward: </span>
                      <code className="text-sm font-bold text-center tracking-wider dark:text-violet-400">
                        ₳{(group.reward / ADA_ATOMIC_UNIT).toLocaleString(undefined, { minimumFractionDigits: 6, maximumFractionDigits: 6 })}
                      </code>
                    </div>
                    <div className="flex text-xs items-center justify-between mx-auto tracking-widest">
                      <code className="text-gray-500 max-w-50 truncate">{group.address}</code>
                    </div>
                    <div className="mt-1 flex text-xs items-center justify-between mx-auto tracking-widest">
                      <code className="text-gray-500">{format_unix_time(group.time)}</code>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="mt-2">
        <h3 className="text-md text-neutral-600 dark:text-neutral-200 font-medium tracking-wider text-center">
          Choose Page
        </h3>
      </div>

      <div className="py-2 flex flex-wrap gap-2 justify-center mx-auto lg:px-40">
        { page_numbers.map((number, i) => {
          return (
            <span key={i} onClick={() => setCurrentStakersPage(number)}>
              <Button text={number.toString()} size="xs" class_extra="cursor-pointer hover:scale-110"/>
            </span>
          );
        })}
      </div>



    </div>
  );
};

export default PoolInformation;