import React from "react";

type Props = {
   dark?: true;
};

export default function FormSeparation({ dark }: Props) {
   return (
      <div className="flex w-full items-center gap-1 mt-2">
         <div
            className={`h-[1px] flex-1 ${
               dark ? "bg-primary-light" : " bg-secondary-dark"
            }`}
         />
         <div className="truncate text-xs sm:text-sm">OR</div>
         <div
            className={`h-[1px] flex-1 ${
               dark ? "bg-primary-light" : " bg-secondary-dark"
            }`}
         />
      </div>
   );
}
