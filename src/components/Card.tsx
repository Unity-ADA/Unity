import { FC, ReactNode } from "react";

interface CustomProp {
  children: ReactNode;
  hover_effect?: boolean;
}

const Card: FC <CustomProp> = ({ children, hover_effect = false }) => {
  let he = "";
  if (hover_effect) {
    he = "hover:scale-105 transition-all duration-300 hover:dark:bg-neutral-900/70";
  }

  return (
    <div className={`${he} border-2 border-slate-400/80 dark:border-neutral-900 rounded-md p-2 bg-neutral-100 dark:bg-neutral-900/30`}>
      {children}
    </div>
  );
};

export default Card;
