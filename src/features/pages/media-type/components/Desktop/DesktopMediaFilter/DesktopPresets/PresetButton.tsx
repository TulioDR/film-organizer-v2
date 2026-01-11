import React from "react";

type Props = {};

export default function PresetButton({}: Props) {
   return (
      <div className="hover:bg-accent rounded-md p-4 flex gap-2">
         <div className="h-16 aspect-square rounded-md border bg-background-accent-light dark:bg-background-accent-dark border-border-light dark:border-border-dark flex items-center justify-center">
            <span className="material-symbols-outlined">{value.icon}</span>
         </div>
         <div className="flex-1 h-full flex justify-end flex-col gap-1">
            <span className="text-sm">{value.label}</span>
            <div className="flex gap-1">
               {Object.values(value.values).map((item) => (
                  <span className="text-xs bg-accent px-3 py-1 rounded border border-border-light dark:border-border-dark">
                     {item.label}
                  </span>
               ))}
            </div>
         </div>
      </div>
   );
}
