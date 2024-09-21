import React , { FC } from "react";
import { bold_type } from "./types/Button";

interface CustomProp {
  icon: string;
  bold_type?: bold_type;
  extra_class?: string;
}

const Icon: FC <CustomProp> = ({
  icon, bold_type, extra_class
}) => {

  let sw = "1";
  switch (bold_type) {
    case "medium": sw = "1.5"; break;
    case "bold": sw = "2"; break;
    default: break;
  }

  const svg: { [key: string]: JSX.Element } = {
    logo: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pathfinder-unite-marge"><path fill="#a78bfa" d="M15.076 7.028A.989.989 0 0 0 14 7.949a1 1 0 0 0 .921 1.073 5.5 5.5 0 1 1-5.9 5.9 1 1 0 1 0-1.994.152 7.5 7.5 0 1 0 8.049-8.046Z"></path><path fill="#d4d4d4" d="M15 2H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5.025a1 1 0 0 0 0-2H4V4h10v4.025a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"></path></svg>
    ),
    //https://heroicons.com/
    x: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={sw} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
    ),
    star: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={sw} stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>
    ),
    rocket: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={sw} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>
    ),
    website: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={sw} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
    ),
    search: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={sw} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
    ),
    copy: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={sw} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" /></svg>
    ),
    info: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={sw} stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>
    ),
    development: (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${extra_class ? extra_class : 'size-14'}`} fill="none" viewBox="0 0 24 24" strokeWidth={sw} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" /></svg>
    ),
    curator_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${extra_class ? extra_class : 'size-14'}`} viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" /></svg>
    ),
    app_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"className={`${extra_class ? extra_class : 'size-14'}`} ><path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" /></svg>
    ),
    pool_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`} ><path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" /><path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" /><path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" /></svg>
    ),
    coin_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" /><path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" /><path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" /><path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" /></svg>
    ),
    money_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" /><path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" /><path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" /></svg>
    ),
    time_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" /></svg>
    ),
    no_symbol_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" /></svg>
    ),
    chat_bubble_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" /><path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" /></svg>
    ),
    read_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" /></svg>
    ),
    like_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" /></svg>
    ),
    copy_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />  <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" /></svg>
    ),
    hashtag_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path fillRule="evenodd" d="M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z" clipRule="evenodd" /></svg>
    ),
    user_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${extra_class ? extra_class : 'size-14'}`} viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" /></svg>
    ),
    write_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" /></svg>
    ),
    delete_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" /></svg>
    ),
    clock_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" /></svg>
    ),
    sparkles_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" /></svg>
    ),
    edited_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" /><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" /></svg>
    ),
    detail_solid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${extra_class ? extra_class : 'size-14'}`}><path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" /><path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z" clipRule="evenodd" /><path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" /></svg>
    ),
    //https://nucleoapp.com/social-media-icons
    discord: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`}  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M26.413,6.536c-1.971-.902-4.052-1.543-6.189-1.904-.292,.523-.557,1.061-.793,1.612-2.277-.343-4.592-.343-6.869,0-.236-.551-.5-1.089-.793-1.612-2.139,.365-4.221,1.006-6.194,1.909C1.658,12.336,.596,17.987,1.127,23.558h0c2.294,1.695,4.861,2.984,7.591,3.811,.615-.827,1.158-1.704,1.626-2.622-.888-.332-1.744-.741-2.56-1.222,.215-.156,.425-.316,.628-.472,4.806,2.26,10.37,2.26,15.177,0,.205,.168,.415,.328,.628,.472-.817,.483-1.676,.892-2.565,1.225,.467,.918,1.011,1.794,1.626,2.619,2.732-.824,5.301-2.112,7.596-3.808h0c.623-6.461-1.064-12.06-4.46-17.025Zm-15.396,13.596c-1.479,0-2.702-1.343-2.702-2.994s1.18-3.006,2.697-3.006,2.73,1.354,2.704,3.006-1.192,2.994-2.699,2.994Zm9.967,0c-1.482,0-2.699-1.343-2.699-2.994s1.18-3.006,2.699-3.006,2.723,1.354,2.697,3.006-1.189,2.994-2.697,2.994Z"></path></svg>
    ),
    github: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`}  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path></svg>
    ),
    reddit: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`}  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M27.332,10.323c-1.07,0-2.055,.361-2.842,.967-2.143-1.326-4.848-2.16-7.807-2.271v-.013c0-1.983,1.474-3.629,3.386-3.9v-.003c.347,1.47,1.666,2.564,3.242,2.564,1.84,0,3.331-1.491,3.331-3.331s-1.491-3.331-3.331-3.331c-1.609,0-2.95,1.14-3.262,2.657-2.694,.289-4.798,2.574-4.798,5.343v.017c-2.93,.123-5.605,.957-7.729,2.274-.789-.611-1.779-.974-2.853-.974-2.578,0-4.668,2.09-4.668,4.668,0,1.871,1.099,3.483,2.688,4.228,.155,5.419,6.06,9.778,13.323,9.778s13.176-4.364,13.323-9.787c1.576-.75,2.666-2.357,2.666-4.217,0-2.578-2.09-4.668-4.668-4.668ZM7.334,17.952c.078-1.693,1.203-2.992,2.51-2.992s2.307,1.373,2.229,3.066c-.078,1.693-1.054,2.308-2.363,2.308s-2.453-.689-2.375-2.382Zm13.596,4.424c-.804,1.922-2.703,3.273-4.919,3.273s-4.114-1.351-4.919-3.273c-.095-.228,.061-.483,.306-.508,1.437-.145,2.991-.225,4.613-.225s3.175,.08,4.613,.225c.245,.025,.401,.28,.306,.508Zm1.384-2.043c-1.307,0-2.285-.614-2.363-2.308-.078-1.693,.92-3.066,2.229-3.066s2.433,1.299,2.51,2.992c.078,1.693-1.068,2.382-2.375,2.382Z"></path></svg>
    ),
    telegram: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`}  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M16,2c-7.732,0-14,6.268-14,14s6.268,14,14,14,14-6.268,14-14S23.732,2,16,2Zm6.489,9.521c-.211,2.214-1.122,7.586-1.586,10.065-.196,1.049-.583,1.401-.957,1.435-.813,.075-1.43-.537-2.218-1.053-1.232-.808-1.928-1.311-3.124-2.099-1.382-.911-.486-1.412,.302-2.23,.206-.214,3.788-3.472,3.858-3.768,.009-.037,.017-.175-.065-.248-.082-.073-.203-.048-.29-.028-.124,.028-2.092,1.329-5.905,3.903-.559,.384-1.065,.571-1.518,.561-.5-.011-1.461-.283-2.176-.515-.877-.285-1.574-.436-1.513-.92,.032-.252,.379-.51,1.042-.773,4.081-1.778,6.803-2.95,8.164-3.517,3.888-1.617,4.696-1.898,5.222-1.907,.116-.002,.375,.027,.543,.163,.142,.115,.181,.27,.199,.379,.019,.109,.042,.357,.023,.551Z" fill-rule="evenodd"></path></svg>
    ),
    twitter: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`}  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 32 32"><path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path></svg>
    ),
    // uxwing
    coin: (
      <svg className={`${extra_class ? extra_class : 'size-14'}`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 105.05 122.88"><defs></defs><path className="cls-1" d="M68.11,51.49a18.57,18.57,0,0,1,3.74-1.91A40.38,40.38,0,0,1,79.39,49c3.64-.09,7.27.23,7.63,1a4,4,0,0,1,.41,2.1,4.73,4.73,0,0,1-.68,2A13.94,13.94,0,0,1,82.44,58c-1.66,1.14-3.18,2.19-2.93,3,0,.07.18.2.42.4a15.56,15.56,0,0,0,1.44,1,22.17,22.17,0,0,1,5.37,4.44,27.81,27.81,0,0,1,3.8,5.89c.34.67.67,1.37,1,2.09s.66,1.54,1,2.33l.06.25a6.8,6.8,0,0,0,.74,2.39c.15.25.3.37.44.37h1.76l.69,0c1.64-.12,2.56-.18,3.51,2.28a16.84,16.84,0,0,1,.79,6.43,23.5,23.5,0,0,1-1.25,6.91,4.8,4.8,0,0,1-1.61,2.79,5.61,5.61,0,0,1-3.25,1.19h-2c-.83,0-1.56,0-2.1,0s-.62-.09-.69-.05,0,.05-.11.23a19.77,19.77,0,0,1-2,2.42c-.82.85-1.78,1.79-2.7,2.66s-1.7,1.56-2.4,2.15l-.43.36a7.37,7.37,0,0,0-1.2,1.07,7.57,7.57,0,0,0,.67,1.88c.2.48.32.76.36.87.47,1.15.94,2.26,1.36,3.23.71,1.64,1.5,3.38,1.75,4l0,.06c.58,1.47.45,2.59-.36,3.39a4,4,0,0,1-3.24.83H74.33a4.79,4.79,0,0,1-2.74-.63,7.16,7.16,0,0,1-2.24-2.11l-.06-.11a18.13,18.13,0,0,1-.8-1.64c-.67-1.51-1.51-3.38-2.19-3.11a42.35,42.35,0,0,1-14.19,3.08,49.66,49.66,0,0,1-16.17-2.41c-1.73-.24-2.08.49-2.64,1.65-.16.33-.32.68-.55,1.12h0c-.14.28-.19.4-.24.5-.8,1.71-1.57,3.36-4,3.85l-.26,0-8.91-.07h-.09a3.54,3.54,0,0,1-1.45-.39,2.65,2.65,0,0,1-1.14-1.11c-.79-1.45-.26-2.54.28-3.65h0l.21-.43h0l3.13-6.85.06-.12a2.09,2.09,0,0,0,.38-1.39,2,2,0,0,0-.77-1h0c-.62-.44-1.23-.9-1.81-1.36s-1.17-1-1.73-1.49a32.21,32.21,0,0,1-5-5.84A30.67,30.67,0,0,1,8,92.41a25.73,25.73,0,0,1-1.36-5.67c0-.44-.09-.89-.12-1.34a11.22,11.22,0,0,1-5.9-7.13c-1-3.33-.87-7.47.61-12.08l2.5.8a18,18,0,0,0-.59,10.52A8.86,8.86,0,0,0,6.59,82.4c0-.39.08-.79.13-1.18A28.77,28.77,0,0,1,11.38,69.4,36.27,36.27,0,0,1,23.73,58l.2.14L39.64,68a47.29,47.29,0,0,0-8.16,2,3.74,3.74,0,0,0,2.44,7.07A40,40,0,0,1,47.23,75,47.49,47.49,0,0,1,61,77.19,3.75,3.75,0,0,0,63.18,70a59.27,59.27,0,0,0-6.1-1.55l11-17ZM104.17,4.61H95.29a.89.89,0,0,0-.88.87V27.05a.88.88,0,0,0,.88.87h8.88a.88.88,0,0,0,.88-.87V5.48a.88.88,0,0,0-.88-.87Zm-12,3.85a1.68,1.68,0,0,0-.28-1.05c-.57-.77-2-.54-2.85-.54a12.58,12.58,0,0,1-2.73-.22,31.09,31.09,0,0,1-3.89-1.29c-4.83-1.73-8.94-2.8-14-5a3.88,3.88,0,0,0-3.25,0A84.62,84.62,0,0,0,51.59,6.73a5.43,5.43,0,0,0-1.16.84,5.16,5.16,0,0,0-.87,1.17c-2.79,4-5.18,8.16-7.47,12.27-.77,1.44-1.09,2.81-.56,3.67,2.15,3.54,6-1.49,10.2-4.84,1.76-1.41,4.15-2.66,6.2-4.09,2.64-1.1,3.87-2.15,6.7-2.74,4.34-.38,4.7,5.85-1,6.08-3.87.15-11.85,3.66-14.09,6.9-2.09,3-.94,6,3.32,5.87l3.56-.66c5.66-1.07,5.5-1.28,11.41-.18,3.17.58,6.49,1.2,9.75.59,2-.37,3-1.17,4.81-2.52a16.37,16.37,0,0,1,2.83-2A10.82,10.82,0,0,1,87.8,26c1.36-.32,3.27.14,4.06-1a2.23,2.23,0,0,0,.33-1.17V8.46ZM47.89,36.32a6.29,6.29,0,1,0,7.48.57c-.62.13-1.17.26-1.52.32h0a6.4,6.4,0,0,1-.88.09,11.14,11.14,0,0,1-5.08-1Zm-6.63-4.9L27.08,53.25l23.39,14.8L70.63,37c-1.33-.18-2.57-.41-3.79-.63l-.78-.15-14.49,22a4.09,4.09,0,0,0-5.64,1.26l-9.24-5.86A4.09,4.09,0,0,0,35.43,48l9.31-14.13a8.22,8.22,0,0,1-1.2-2.2,5.83,5.83,0,0,1-2.28-.2Zm36.11,44a4.27,4.27,0,1,1-3,1.25,4.17,4.17,0,0,1,3-1.25Z"/></svg>
    ),
    pool: (
      <svg version="1.1" id="Layer_1" className={`${extra_class ? extra_class : 'size-14'}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.88 79.92" fill="currentColor"><g><path className="st0" d="M76.29,31.83l-16.84,9.48l1.88-6.58c-7.78-4.07-14.85-4.04-21.61,0.83c4.55-12.69,15.16-16.41,25.35-13.96 l1.91-6.71L76.29,31.83L76.29,31.83L76.29,31.83L76.29,31.83z M3.06,0h89.63c1.69,0,3.06,1.38,3.06,3.06v15.13h-6.51V9.14 c0-1.49-1.22-2.71-2.71-2.71H9.22v0c-1.49,0-2.71,1.22-2.71,2.71v46.08c0,1.49,1.22,2.71,2.71,2.71h54.24v12.8H3.06 C1.38,70.73,0,69.35,0,67.67V3.06C0,1.38,1.38,0,3.06,0L3.06,0L3.06,0L3.06,0z M70.74,49.77l26-21.39l26.13,21.39H70.74 L70.74,49.77z M96.81,39.36c1.73,0,3.13,1.4,3.13,3.13c0,1.73-1.4,3.13-3.13,3.13c-1.73,0-3.13-1.4-3.13-3.13 C93.68,40.76,95.08,39.36,96.81,39.36L96.81,39.36z M72.33,79.92v-6.05h1.79l1.71-1.34V56.47h-3.49v-3.85h48.82v3.85h-3.48v16.06 l1.71,1.34h1.82v6.05H72.33L72.33,79.92z M83.95,73.87h1.97l1.71-1.34V56.47h-5.38v16.06L83.95,73.87L83.95,73.87L83.95,73.87z M95.76,73.87h1.97l1.7-1.34V56.47h-5.38v16.06L95.76,73.87L95.76,73.87L95.76,73.87z M107.57,73.87h1.97l1.71-1.34V56.47h-5.38 v16.06L107.57,73.87L107.57,73.87L107.57,73.87z M60.08,73.29c0.03,1.72,0.3,5.05,0.88,6.63H31.34c0.6-1.48,0.93-4.8,0.92-6.63 H60.08L60.08,73.29z M46.17,60.4c2.17,0,3.94,1.76,3.94,3.94c0,2.17-1.77,3.94-3.94,3.94c-2.17,0-3.94-1.76-3.94-3.94 C42.23,62.17,44,60.4,46.17,60.4L46.17,60.4z"/></g></svg>
    )
  }

  return (
    <>
      {svg[icon]}
    </>
  );
};

export default Icon;
