import React from "react";

type Props = {
   onClick: () => void;
};

export default function BackButton({ onClick }: Props) {
   return (
      <button
         className="absolute z-20 top-5 left-5 bg-secondary-light dark:bg-secondary-dark grid place-content-center rounded-full w-10 aspect-square"
         onClick={onClick}
      >
         <span className="material-symbols-outlined">keyboard_arrow_left</span>
      </button>
   );
}
