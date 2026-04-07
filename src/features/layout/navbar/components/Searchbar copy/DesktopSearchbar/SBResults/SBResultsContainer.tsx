import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function SBResultsContainer({ children }: Props) {
   return (
      <div className="absolute top-full left-0 w-full h-96 overflow-hidden shadow-md rounded-b-md text-black bg-gray-200 border border-border border-t-0">
         <div className="w-full h-full flex items-center justify-center">
            {children}
         </div>
      </div>
   );
}
