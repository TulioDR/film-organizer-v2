import StoreModel from "@/models/StoreModel";
import React from "react";
import { useSelector } from "react-redux";

type Props = {
   text: string;
   isMainLink?: true;
};

export default function SideItemText({ text, isMainLink }: Props) {
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);
   return (
      <span
         className={`flex-shrink-0 duration-300 ${
            isMainLink ? "text-base" : "text-sm"
         } ${isMainLink ? (expandSidebar ? "opacity-100" : "opacity-0") : ""} `}
      >
         {text}
      </span>
   );
}
