import React from "react";

type Props = {
   title: string;
   icon: string;
};

export default function MT_Title({ title, icon }: Props) {
   return (
      <div className="flex items-center w-full gap-2">
         <span className="material-symbols-outlined !text-3xl">{icon}</span>
         <span className="text-3xl text-white">{title}</span>
      </div>
   );
}
