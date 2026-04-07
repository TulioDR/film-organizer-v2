import React from "react";

type Props = {
   message: string;
};

export default function SearchMessage({ message }: Props) {
   return (
      <div className="w-full h-full flex items-center justify-center">
         <span className="text-sm">{message}</span>
      </div>
   );
}
