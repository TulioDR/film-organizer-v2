import React from "react";

type Props = {
   onClick: () => void;
};

export default function BackButton({ onClick }: Props) {
   return (
      <button
         className="absolute z-20 top-0 right-0 bg-secondary-light dark:bg-secondary-dark grid place-content-center rounded-bl-xl h-9 w-9"
         onClick={onClick}
      >
         <span className="material-symbols-outlined">close</span>
      </button>
   );
}
