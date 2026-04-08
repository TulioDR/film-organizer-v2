import React from "react";

type Props = {
   message: string;
};

export default function SearchMessage({ message }: Props) {
   return (
      <div className="w-full xl:h-full flex items-center justify-center p-8">
         <span className="text-sm">{message}</span>
      </div>
   );
}
