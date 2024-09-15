import React, { FC } from "react";
import { bold_type, size_type } from "./types/Button";

interface ChipProps {
  text: string;
  size: size_type;
  bold_type?: bold_type;
}

const Chip: FC <ChipProps> = ({ text, size, bold_type }) => {
  let fontSize = "";
  switch (size) {
    case "xs": fontSize = "text-xs"; break;
    case "sm": fontSize = "text-sm"; break;
    case "md": fontSize = "text-md"; break;
    case "lg": fontSize = "text-lg"; break;
    case "xl": fontSize = "text-xl"; break;
    default: break;
  }

  let bold = "";
  switch (bold_type) {
    case "medium": bold = "font-medium"; break;
    case "bold": bold = "font-bold"; break;
    default: break;
  }

  const customClass = `
    ${fontSize}
    ${bold}
    border border-stroke/80 dark:border-neutral-800
    center
    relative
    inline-block
    select-none
    whitespace-nowrap
    rounded-md
    py-1 px-3
    align-baseline
    font-sans
    uppercase
    leading-none
    text-black
    font-medium
    tracking-wider
    bg-neutral-100 dark:bg-neutral-900 
    dark:text-neutral-200`;

  return (
    <div className={customClass}>
      <div className="mt-px opacity-80 dark:opacity-65">
        {text}
      </div>
    </div>
  );
};

export default Chip;