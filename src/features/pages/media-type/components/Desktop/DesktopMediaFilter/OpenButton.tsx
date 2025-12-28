import React from "react";

type Props = {
   onClick: () => void;
};

export default function OpenButton({ onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="h-16 flex-shrink-0 aspect-square text-black rounded-br border-border-light dark:border-border-dark dark:text-white group"
      >
         <div className="h-full w-full flex items-center justify-center group-hover:scale-125 duration-200">
            <span className="material-symbols-outlined">close</span>
         </div>
      </button>
   );
}
