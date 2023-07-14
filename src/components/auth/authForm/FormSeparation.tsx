import React from "react";

type Props = {
   isSignUp: true | undefined;
};

export default function FormSeparation({ isSignUp }: Props) {
   return (
      <div className="flex w-full items-center gap-1 my-2">
         <div
            className={`h-[1px] flex-1 ${
               isSignUp ? "bg-white" : "bg-blue-600"
            }`}
         />
         <div className="truncate text-sm">OR</div>
         <div
            className={`h-[1px] flex-1 ${
               isSignUp ? "bg-white" : "bg-blue-600"
            }`}
         />
      </div>
   );
}
