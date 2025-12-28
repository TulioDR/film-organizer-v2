import React from "react";

type Props = {
   onClick: () => void;
   left?: boolean;
   right?: boolean;
};

export default function SlideButton({ onClick, left, right }: Props) {
   return (
      <button
         onClick={onClick}
         className={`z-20 absolute w-8 h-full bg-black dark:bg-white text-white dark:text-black border-x border-border-light dark:border-border-dark
            ${left ? "top-0 left-0" : ""}
            ${right ? "top-0 right-0" : ""}   
         `}
      >
         <span className="material-symbols-outlined">
            {left && "chevron_left"}
            {right && "chevron_right"}
         </span>
      </button>
   );
}
