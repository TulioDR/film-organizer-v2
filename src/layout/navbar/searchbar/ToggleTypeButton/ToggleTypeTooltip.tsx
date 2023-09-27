import StoreModel from "@/models/StoreModel";
import React from "react";
import { useSelector } from "react-redux";

type Props = {
   isMovie: boolean;
};

export default function ToggleTypeTooltip({ isMovie }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   console.log("show Tooltip");
   return (
      <div className="hidden md:block absolute top-full right-full translate-y-1 z-50">
         <div className="w-9 flex justify-center">
            <div
               className="h-2 w-2 rotate-45 translate-y-1"
               style={{ backgroundColor: themeColor }}
            ></div>
         </div>
         <div
            className="rounded-md text-xs py-1 px-2 w-max"
            style={{ backgroundColor: themeColor }}
         >
            Switch to {isMovie ? "Series" : "Movies"}
         </div>
      </div>
   );
}
