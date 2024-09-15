import { FC } from "react";

const BacCodeBlock: FC = () => {

  return (
    <div className="relative rounded-lg dark:bg-neutral-900/70 p-2">
      <div className="relative flex text-center">

        <div className="flex pl-3.5 pt-3">
          <svg
            viewBox="0 0 24 24"
            fill="#7f1d1d"
            className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20"
          >
            <circle r="12" cy="12" cx="12" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="#713f12"
            className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20"
          >
            <circle r="12" cy="12" cx="12" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="#14532d"
            className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20"
          >
            <circle r="12" cy="12" cx="12" />
          </svg>
        </div>

        <span className="absolute inset-x-0 top-2 text-sm text-neutral-500 font-bold">
          src/verified/curator.ts
        </span>
      </div>

      <div className="mt-5 space-y-1.5 px-2 pb-10 break-words">

        {/** import line 1 */}
        <p className="mt-4 font-mono text-sm font-normal tracking-wide text-violet-400">
          <span className="text-pink-400">import </span>
          <span className="text-yellow-400">{'{ '} </span>
          <span className="text-blue-300">images</span>
          <span className="text-neutral-400">, </span>
          <span className="text-blue-300">curator_information</span>
          <span className="text-neutral-400">, </span>
          <span className="text-blue-300">links</span>
          <span className="text-yellow-400">{' }'} </span>
          <span className="text-pink-400">from </span>
          <span className="text-orange-400">{`"@/utils/Interfaces"`} </span>
          <span className="text-neutral-400">;</span>
        </p>

        {/** import line 2 */}
        <p className="mt-4 font-mono text-sm font-normal tracking-wide text-violet-400">
          <span className="text-pink-400">import </span>
          <span className="text-yellow-400">{'{ '} </span>
          <span className="text-blue-300">curators_id</span>
          <span className="text-yellow-400">{' }'} </span>
          <span className="text-pink-400">from </span>
          <span className="text-orange-400">{`"@/utils/Types"`} </span>
          <span className="text-neutral-400">;</span>
        </p>

        <br/>

        {/** interface */}
        <>
          <p className="mt-4 font-mono text-sm font-normal tracking-wide text-violet-400">
            <span className="text-blue-400">interface</span>
            <span className="text-green-400"> curator</span>
            <span className="text-yellow-300">{' {'}</span>
          </p>

          <p className="ml-2 font-mono text-sm font-normal tracking-wide text-violet-400">
            <span className="text-blue-400">id: </span>
            <span className="text-green-400">curators_id</span>
            <span className="text-neutral-400">;</span>
          </p>
          <p className="ml-2 font-mono text-sm font-normal tracking-wide text-violet-400">
            <span className="text-blue-400">curator_information: </span>
            <span className="text-green-400">curator_information</span>
            <span className="text-neutral-400">;</span>
          </p>
          <p className="ml-2 font-mono text-sm font-normal tracking-wide text-violet-400">
            <span className="text-blue-400">links: </span>
            <span className="text-green-400">links</span>
            <span className="text-neutral-400">;</span>
          </p>
          <p className="ml-2 font-mono text-sm font-normal tracking-wide text-violet-400">
            <span className="text-blue-400">images: </span>
            <span className="text-green-400">images</span>
            <span className="text-neutral-400">;</span>
          </p>
          <p className="font-mono text-sm font-normal tracking-wide text-violet-400">
            <span className="text-yellow-300">{'}'}</span>
          </p>

        </>

        <br/>

        {/** declare const */}
        <>
          <p className="mt-4 font-mono text-sm font-normal tracking-wide text-violet-400">
            <span className="text-blue-400">const</span>
            <span className="text-blue-200"> curator:</span>
            <span className="text-green-400"> curator</span>
            <span className="text-yellow-300 tracking-widest">{'[]'}</span>
            <span className="text-neutral-400">{' = '}</span>
            <span className="text-yellow-300">{'['}</span>
          </p>
        </>

        <p className="ml-2 font-mono text-sm font-normal tracking-wide">
          <span className="text-pink-400">{'{'}</span>
        </p>

        {/** item 1 */}
        <>
          <p className="ml-4 font-mono text-sm font-normal leading-4 tracking-wide">
            <span className="text-cyan-400">id: </span>
            <span className="text-orange-400">'ASHE'</span>
            <span className="text-neutral-400">,</span>
          </p>
        </>

        {/** item 2 */}
        <>
          <p className="ml-4 font-mono text-sm font-normal leading-4 tracking-wide">
            <span className="text-cyan-400">curator_information: </span>
            <span className="text-blue-500">{'{'}</span>
          </p>

          <p className="ml-6 font-mono text-sm font-normal leading-4 tracking-wide">
            <span className="text-cyan-400">name: </span>
            <span className="text-orange-400">"Ashe. T"</span>
            <span className="text-neutral-400">,</span>
          </p>

          <p className="ml-6 font-mono text-sm font-normal leading-4 tracking-wide">
            <span className="text-cyan-400">description: </span>
            <span className="text-orange-400">"Senior Software Engineer, a High Teacher day-to-day, and a builder in Cardano ecospace."</span>
          </p>

          <p className="ml-4 font-mono text-sm font-normal tracking-wide">
            <span className="text-blue-500">{'}'}</span>
            <span className="text-neutral-400">,</span>
          </p>
        </>

        {/** item 3 */}
        <>
          <p className="ml-4 font-mono text-sm font-normal leading-4 tracking-wide">
            <span className="text-cyan-400">links: </span>
            <span className="text-blue-500">{'{'}</span>
          </p>

          <p className="ml-6 font-mono text-sm font-normal leading-4 tracking-wide">
            <span className="text-cyan-400">twitter: </span>
            <span className="text-orange-400">"https://x.com/_AsheT"</span>
            <span className="text-neutral-400">,</span>
          </p>

          <p className="ml-6 font-mono text-sm font-normal leading-4 tracking-wide">
            <span className="text-cyan-400">discord_handle: </span>
            <span className="text-orange-400">"@ashetaylor"</span>
          </p>

          <p className="ml-4 font-mono text-sm font-normal tracking-wide">
            <span className="text-blue-500">{'}'}</span>
            <span className="text-neutral-400">,</span>
          </p>
        </>

        {/** item 4 */}
        <>
          <p className="ml-4 font-mono text-sm font-normal leading-4 tracking-wide">
            <span className="text-cyan-400">images: </span>
            <span className="text-blue-500">{'{'}</span>
          </p>

          <p className="ml-6 font-mono text-sm font-normal leading-4 tracking-wide">
            <span className="text-cyan-400">logo: </span>
            <span className="text-orange-400">"https://pbs.twimg.com/profile_images/1815817953813692416/KaOUj2KR_400x400.jpg"</span>
            <span className="text-neutral-400">,</span>
          </p>

          <p className="ml-6 font-mono text-sm font-normal leading-4 tracking-wide">
            <span className="text-cyan-400">header: </span>
            <span className="text-orange-400">"https://pbs.twimg.com/profile_banners/1586189651693522944/1722296681/1500x500"</span>
          </p>

          <p className="ml-4 font-mono text-sm font-normal tracking-wide">
            <span className="text-blue-500">{'}'}</span>
          </p>
        </>

        {/** close it up */}
        <p className="ml-2 font-mono text-sm font-normal tracking-wide">
          <span className="text-pink-400">{'}'}</span>
          <span className="text-neutral-400">,</span>
        </p>

        <p className="font-mono text-sm font-normal tracking-wide">
          <span className="text-yellow-300">{']'}</span>
          <span className="text-neutral-300">{';'}</span>
        </p>
      </div>
    </div>
  );
};

export default BacCodeBlock;