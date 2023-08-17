import React from "react";

type Props = {
   login: boolean;
};

export default function FormSeparation({ login }: Props) {
   return (
      <div className="flex w-full items-center gap-1 mt-2">
         <div
            className={`h-[1px] flex-1 ${
               login ? "bg-secondary-dark" : "bg-primary-light"
            }`}
         />
         <div className="truncate text-xs sm:text-sm">OR</div>
         <div
            className={`h-[1px] flex-1 ${
               login ? "bg-secondary-dark" : "bg-primary-light"
            }`}
         />
      </div>
   );
}
