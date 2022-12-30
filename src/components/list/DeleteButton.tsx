import React from "react";

type Props = {
   isDeleteOpen: boolean;
   onClick: () => void;
};

export default function DeleteButton({ isDeleteOpen, onClick }: Props) {
   return (
      <div className="fixed bottom-5 right-10 rounded-lg bg-red-700 text-white flex items-center">
         <div
            className={`h-full duration-200 overflow-hidden ${
               isDeleteOpen ? "w-72" : "w-0"
            }`}
         >
            <div className="shrink-0 h-full w-72 flex items-center justify-center float-right">
               Which ones you want to remove?
            </div>
         </div>
         <button
            onClick={onClick}
            className="aspect-square h-12 grid place-content-center"
         >
            <span className="material-icons text-3xl">
               {isDeleteOpen ? "close" : "delete"}
            </span>
         </button>
      </div>
   );
}
