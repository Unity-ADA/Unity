import { FC } from "react";

import Icon from "@/components/Icons";

const Hero: FC = () => {
    
  return (
    <div className="relative overflow-hidden rounded-lg md:rounded-full mb-6">
      <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-violet-300/30 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-700/30 dark:to-purple-900/30"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/30 dark:via-indigo-900/30 dark:to-blue-900/30"></div>
      </div>

      <div className="relative">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <p className={`inline-block text-lg font-medium bg-clip-text bg-gradient-to-bl text-transparent from-blue-600 to-violet-500 dark:from-pink-200 dark:to-violet-600`}>
              UnityLabs Presents
            </p>

            <div className="mt-2 max-w-2xl flex justify-center gap-2 items-center">
              <Icon icon="logo"/>
              <h1 className="block font-semibold text-4xl md:text-5xl lg:text-6xl text-neutral-500 dark:text-neutral-200">
                Unity.
              </h1>
            </div>

            <div className="mt-5 max-w-3xl">
              <p className="text-md text-gray-600 dark:text-neutral-300">
                Unity offers an intuitive user interface and a comprehensive suite of tools,
                making it a valuable resource for both developers and investors in the Cardano
                ecosystem.<br/>
                The platform's dashboard is designed to be user-friendly, catering to
                the needs of both developers and investors without overwhelming them with a
                complex interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;