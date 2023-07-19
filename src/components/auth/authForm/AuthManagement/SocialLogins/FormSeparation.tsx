import React from "react";

type Props = {
   register: boolean;
};

export default function FormSeparation({ register }: Props) {
   return (
      <div className="flex w-full items-center gap-1 mt-2">
         <div
            className={`h-[1px] flex-1 ${
               register ? "bg-white" : "bg-secondary"
            }`}
         />
         <div className="truncate text-xs sm:text-sm">OR</div>
         <div
            className={`h-[1px] flex-1 ${
               register ? "bg-white" : "bg-secondary"
            }`}
         />
      </div>
   );
}
