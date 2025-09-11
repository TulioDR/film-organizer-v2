import Store from "@/common/models/Store";
import React from "react";
import { useSelector } from "react-redux";

type Props = { icon: string; title: string };

export default function DdHeader({ icon, title }: Props) {
   const { themeColor } = useSelector((state: Store) => state.theme);

   return (
      <div
         className="rounded flex-1 w-full flex flex-col items-center justify-center"
         style={{ backgroundColor: themeColor }}
      >
         <span className="material-symbols-outlined !text-4xl">{icon}</span>
         <span className="font-semibold font-title truncate uppercase">
            {title}
         </span>
      </div>
   );
}
