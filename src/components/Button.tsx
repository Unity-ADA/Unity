import { FC } from "react";
import { bold_type, size_type } from "./types/Button";
import Icon from "./Icons";

interface CustomProp {
  text?: string;
  size: size_type;
  bold_type?: bold_type;
  class_extra?: string;
  icon?: string;
  url?: string;
  target?: string;
}

const Button: FC <CustomProp> = ({ text, size, bold_type, class_extra, icon, url, target }) => {
  let fontSize = "";
  let iconSize = "";
  switch (size) {
    case "xs": fontSize = "text-xs"; iconSize = "size-4"; break;
    case "sm": fontSize = "text-sm"; iconSize = "size-6"; break;
    case "md": fontSize = "text-md"; iconSize = "size-8"; break;
    case "lg": fontSize = "text-lg"; iconSize = "size-10"; break;
    case "xl": fontSize = "text-xl"; iconSize = "size-12"; break;
    default: break;
  }

  let bold = "";
  switch (bold_type) {
    case "medium": bold = "font-medium"; break;
    case "bold": bold = "font-bold"; break;
    default: break;
  }

  const button_class = `
    ${fontSize}
    ${bold}
    ${class_extra}
    border-2 border-slate-400 dark:border-neutral-800
    text-neutral-700 dark:text-neutral-200
    bg-slate-100 dark:bg-neutral-950
    flex overflow-hidden items-center shadow whitespace-pre group relative justify-center gap-2 rounded-md
    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
    py-1 px-4
    transition-all duration-300 ease-out text-decoration-none
  `;

  const hover_effect = `
    absolute right-0
    -mt-12 h-32 w-8 translate-x-12 rotate-12
    dark:bg-white bg-black opacity-10
    transition-all duration-1000 ease-out
    group-hover:-translate-x-full
  `;

  return (
    <a className={button_class} href={url && url} target={target && target}>
      <span className={hover_effect}/>

      {icon && (<Icon icon={icon} extra_class={iconSize}/>)}
      {text && (<span className="text-neutral-800 dark:text-neutral-200 truncate uppercase tracking-widest">{text}</span>)}
    </a>
  );
};

export default Button;
