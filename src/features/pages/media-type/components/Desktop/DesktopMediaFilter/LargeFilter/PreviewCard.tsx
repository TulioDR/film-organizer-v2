import React from "react";

type Props = {
   text: string;
   icon: string | React.ReactNode;
   permanent?: true;
};

export default function PreviewCard({ text, icon, permanent }: Props) {
   return (
      <div className="bg-white dark:bg-black text-black dark:text-white rounded w-40 h-9 flex items-center p-2 gap-2 border border-border-light dark:border-border-dark">
         <div className="h-full aspect-square flex items-center justify-center">
            {typeof icon === "string" ? (
               <span className="material-symbols-outlined">{icon}</span>
            ) : (
               icon
            )}
         </div>
         <div className="flex-1 truncate text-xs">{text}</div>
         {!permanent && (
            <div className="h-full aspect-square flex items-center justify-center cursor-pointer overflow-hidden">
               <span className="material-symbols-outlined !text-xl">close</span>
            </div>
         )}
      </div>
   );
}
