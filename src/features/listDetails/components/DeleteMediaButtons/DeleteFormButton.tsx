import React from "react";

type Props = {
   children: React.ReactNode;
   onClick: () => void;
   disabled?: boolean;
};

export default function DeleteFormButton({
   children,
   onClick,
   disabled,
}: Props) {
   return (
      <button
         onClick={onClick}
         className={`rounded-full px-4 border ${
            disabled
               ? "pointer-events-none border-gray-400 text-gray-400"
               : "border-white  text-white hover:bg-white hover:text-black"
         }`}
      >
         {children}
      </button>
   );
}
