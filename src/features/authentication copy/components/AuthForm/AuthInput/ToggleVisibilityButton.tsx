import React from "react";

type Props = {
   onClick?: () => void;
   type: string;
};

export default function ToggleVisibilityButton({ onClick, type }: Props) {
   return (
      <button
         onClick={onClick}
         type="button"
         className="w-11 text-center absolute right-0 top-0 h-full grid place-content-center cursor-pointer"
      >
         <span className="material-symbols-outlined text-2xl">
            {type === "password" ? "visibility" : "visibility_off"}
         </span>
      </button>
   );
}
