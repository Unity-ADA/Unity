import { FC } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import BacCodeBlock from "./CodeBlock";
import BacCodeBlock2 from "./CodeBlock2";
import Card from "@/components/Card";
import Button from "@/components/Button";

const BecomeACurator: FC = () => {

  return (
    <div>
      <Breadcrumb sub_page_1="Development" active_page="Become A Curator"/>

      <div className="p-2 lg:mx-20 dark:bg-neutral-900/30 border-2 border-neutral-800 rounded-lg flex justify-center flex-col">
        <h3 className="text-md text-center font-bold tracking-wider uppercase">
          Notice
        </h3>

        <p className="text-sm text-center pb-2">
          Unity is in its early days and to encourage new curators, you yourself don't have to follow this guide
            in order to become a curator. Our lead developer will implement you into our database if you suggest a
            token, pool or app to be added.<br/>
          <span className="tracking-wider font-medium dark:text-violet-400">Use one of our social medias to reach out!</span>
        </p>

        <div className="flex justify-center gap-2 -mb-5">
          <Button text="Discord" size="xs" url="https://discord.gg/Vx6U85nbQt" target="_blank"/>
          <Button text="Twitter" size="xs" url="https://x.com/_ashet" target="_blank"/>
        </div>
      </div>

      <div className="my-4 py-4">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <BacCodeBlock2/>
            <BacCodeBlock/>
          </div>

          <Card>
            <div className="px-2 py-4 text-center ">
              <h3 className="text-lg text-neutral-600 dark:text-neutral-200 font-medium tracking-wider">
                Learn how to become a Curator on Unity
              </h3>

              <p className={`text-sm p-2 tracking-wide dark:text-neutral-400`}>
                In this guide, the code you see may become more understandable while learning to integrate a new token, pool or curator to the Unity platform.
                The aim for this guide is to give you ease of mind when learning how to do this for yourself.
              </p>

              <h3 className="mt-2 text-lg text-neutral-600 dark:text-neutral-200 font-medium tracking-wider">
                Let Us Begin
              </h3>

              <p className={`text-sm p-2 tracking-wide dark:text-neutral-400`}>
                From the start, you will notice 2 lines of imports, these contain our 
                <code className="px-1 text-pink-400">interface</code>'s and <code className="px-1 text-pink-400">type</code>'s
                to make sure all our values an object should contain the correct information without breaking everything in between.
                We utilise the power of Typescript on Unity.
                <br /><br />
                Let us look at our first bit of "real code".
                You may notice 2 code blocks on display within this guide, this is to edit 2 different files.
                We firstly edit <code className="px-1 text-pink-400">src/utils/Types.ts</code> to add a new curator ID
                to the unity database. This bind the ID globally so the developer has to use this ID exactly for
                type saftey during development.
                <br/>
                The second file is <code className="px-1 text-pink-400">src/verified/curator.ts</code>.
                This is where you actually add your details as a curator to the platform.
                You will notice towards the top of the file we have an <code className="px-1 text-pink-400">interface</code>
                to show you what information is needed to integrate new curators.
              </p>

              <div className="text-sm w-full border-2 border-slate-300 dark:border-neutral-900 mt-6 mx-auto">
                <div className="flex bg-slate-500 dark:bg-neutral-900 text-white">
                  <div className="flex-1 py-2 px-4 text-center">Name</div>
                  <div className="flex-1 py-2 px-4 text-center">Description</div>
                </div>

                <div className="flex items-center bg-white border-b border-slate-500 dark:border-neutral-800 hover:dark:bg-neutral-900/30 dark:bg-neutral-950">
                  <div className="flex-1 py-2 px-4">id</div>
                  <div className="flex-1 py-2 px-4">This is your curator ID you created earlier</div>
                </div>
                <div className="flex items-center bg-white border-b border-slate-500 dark:border-neutral-800 hover:dark:bg-neutral-900/30 dark:bg-neutral-950">
                  <div className="flex-1 py-2 px-4">curator_information</div>
                  <div className="flex-1 py-2 px-4">This is your Display Name and description of yourself</div>
                </div>
                <div className="flex items-center bg-white border-b border-slate-500 dark:border-neutral-800 hover:dark:bg-neutral-900/30 dark:bg-neutral-950">
                  <div className="flex-1 py-2 px-4">links</div>
                  <div className="flex-1 py-2 px-4">
                    These are links to your own social media and website.<br/>
                    Currently it supported socials: Discord, Discord Handle, GitHub, Reddit, Telegram and Twitter/X
                  </div>
                </div>
                <div className="flex items-center bg-white border-b border-slate-500 dark:border-neutral-800 hover:dark:bg-neutral-900/30 dark:bg-neutral-950">
                  <div className="flex-1 py-2 px-4">images</div>
                  <div className="flex-1 py-2 px-4">This is for your profile logo and custom header if you choose to have one</div>
                </div>
              </div>

              <h3 className="mt-6 text-lg text-neutral-600 dark:text-neutral-200 font-medium tracking-wider">
                Breakdown
              </h3>

              <p className={`text-sm p-2 tracking-wide dark:text-neutral-400`}>
                In our example, we used Unity's lead developer - Ashe.
                <br/>
                Below, we'll go through every field within this file to make your profile as
                complete as it can be.
                <br/>
              </p>

              <ul className="text-left space-y-2 text-gray-500 dark:text-gray-400">
                <li className="pt-4">
                  <code className="text-pink-400">id: <span className="text-orange-400">"ASHE"</span></code>
                  <li className="ps-5 mt-2 list-disc list-decimal list-inside text-sm">
                    This is your curator ID you created earlier
                  </li>
                </li>

                <li className="pt-4">
                  <div className="truncate">
                    <code className="text-pink-400">curator_information:</code><br/>
                    <code className="pl-2 text-pink-400">name: <span className="text-orange-400">"Ashe. T"</span></code><br/>
                    <code className="pl-2 text-pink-400">description: <span className="text-orange-400">"Senior Software Engineer, a High Teacher day-to-day, and a builder in Cardano ecospace."</span></code>
                  </div>

                  <li className="ps-5 mt-2 list-disc list-decimal list-inside text-sm">
                    This is your Display Name and description of yourself
                  </li>
                </li>

                <li className="pt-4">
                  <code className="text-pink-400">links:</code><br/>
                  <code className="pl-2 text-pink-400">twitter: <span className="text-orange-400">"https://x.com/_AsheT"</span></code><br/>
                  <code className="pl-2 text-pink-400">discord_handle: <span className="text-orange-400">"@ashetaylor"</span></code>

                  <li className="ps-5 mt-2 list-disc list-decimal list-inside text-sm">
                    These are links to your own social media and website.
                    Currently it supported socials: Discord, Discord Handle, GitHub, Reddit, Telegram and Twitter/X
                  </li>
                </li>

                <li className="pt-4">
                  <div className="truncate">
                    <code className="text-pink-400">images:</code><br/>
                    <code className="pl-2 text-pink-400">logo: <span className="text-orange-400">"https://pbs.twimg.com/profile_images/1815817953813692416/KaOUj2KR_400x400.jpg"</span></code><br/>
                    <code className="pl-2 text-pink-400">header: <span className="text-orange-400">"https://pbs.twimg.com/profile_banners/1586189651693522944/1722296681/1500x500"</span></code>
                  </div>

                  <li className="ps-5 mt-2 list-disc list-decimal list-inside text-sm">
                    This is for your profile logo and custom header if you choose to have one
                  </li>
                </li>
              </ul>

              <h3 className="mt-10 text-lg text-neutral-600 dark:text-neutral-200 font-medium tracking-wider">
                Tada
              </h3>

              <p className={`text-sm p-2 tracking-wide dark:text-neutral-400`}>
                <span className="dark:text-pink-300 tracking-widest font-medium">We said it would be easy!</span>
                <br/>
                Did you know you've just learned how to add an item to an array of objects in JavaScript/TypeScript.
                This is a common operation when working with data structures in programming.
                <br/>
              </p>

              <div className="flex justify-center py-2">
                <Button text="Learn more about TypeScript" size="xs" url="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" target="_blank"/>
              </div>
            </div>
          </Card>
        </div>
      </div>

    </div>
  );
};

export default BecomeACurator;