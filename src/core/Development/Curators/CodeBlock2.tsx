import { FC } from "react";

const BacCodeBlock2: FC = () => {

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
          src/utils/Types.ts
        </span>
      </div>

      <div className="mt-5 space-y-1.5 px-2 pb-10 break-words">

        <p className="mt-10 font-mono text-sm font-normal tracking-wide text-violet-400">
          <span className="text-neutral-400">...</span>
        </p>

        <p className="mt-4 font-mono text-sm font-normal tracking-wide text-violet-400">
          <span className="text-pink-400">export </span>
          <span className="text-blue-400"> type </span>
          <span className="text-green-300">curators_id</span>
          <span className="text-neutral-400">{' = |'} </span>
        </p>

        <p className="mt-2 ml-2 font-mono text-sm font-normal tracking-wide text-violet-400">
          <span className="text-orange-400 tracking-wider">"ASHE" </span>
          <span className="text-neutral-400">{` | `}</span>
          <span className="text-orange-400">"EXAMPLE_NAME"</span>
          <span className="text-neutral-400">{';'} </span>
        </p>

        <p className="mt-10 font-mono text-sm font-normal tracking-wide text-violet-400">
          <span className="text-neutral-400">...</span>
        </p>

      </div>
    </div>
  );
};

export default BacCodeBlock2;