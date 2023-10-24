import React from "react";

type Props = {
   onClick: () => void;
   children: React.ReactNode;
};

export default function UnderlineButton({ onClick, children }: Props) {
   return (
      <button
         type="button"
         onClick={onClick}
         className="hover:underline cursor-pointer text-xs sm:text-sm w-max mx-auto"
      >
         {children}
      </button>
   );
}
