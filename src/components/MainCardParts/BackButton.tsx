import React from "react";

type Props = {
   onClick: () => void;
};

export default function BackButton({ onClick }: Props) {
   return (
      <button
         className="absolute z-10 top-4 left-4 bg-light-bg-secondary dark:bg-dark-bg-secondary grid place-content-center rounded-lg h-9 w-9 shadow-lg"
         onClick={onClick}
      >
         <span className="material-icons">chevron_left</span>
      </button>
   );
}
