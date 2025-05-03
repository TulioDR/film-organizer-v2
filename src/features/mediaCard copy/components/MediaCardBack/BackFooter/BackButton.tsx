import React from "react";

type Props = {
   onClick: () => void;
};

export default function BackButton({ onClick }: Props) {
   return (
      <button
         className="hidden sm:grid bg-white text-black place-content-center rounded-lg w-10 aspect-square"
         onClick={onClick}
      >
         <span className="material-symbols-outlined">keyboard_arrow_left</span>
      </button>
   );
}
