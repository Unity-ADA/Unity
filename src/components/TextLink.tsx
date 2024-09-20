import { FC } from "react";
import { size_type } from "./types/Button";

interface CustomProp {
  text: string;
  size: size_type;
  url: string;
  target?: string;
  ml?: boolean;
}

const TextLink: FC <CustomProp> = ({ text, size, url, target, ml = false }) => {
  let fontSize = "";
  switch (size) {
    case "xs": fontSize = "text-xs"; break;
    case "sm": fontSize = "text-sm"; break;
    case "md": fontSize = "text-md"; break;
    case "lg": fontSize = "text-lg"; break;
    case "xl": fontSize = "text-xl"; break;
    default: break;
  }
  let margin_l = "";
  if (ml) { margin_l = "ml-auto"}

  const span_class = `
    ${fontSize}
    ${margin_l}
    ml-auto
    text-pink-700 dark:text-violet-400
    hover:font-bold hover:underline hover:underline-offset-4
    transition-all duration-250
    tracking-wider
  `;

  return (
    <a className={span_class} href={url} target={target}>
      {text}
    </a>
  );
};

export default TextLink;
