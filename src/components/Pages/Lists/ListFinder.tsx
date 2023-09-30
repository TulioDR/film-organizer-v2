import React from "react";
import RevealHorizontal from "@/animations/RevealHorizontal";

type Props = {
   onChange: (e: React.FormEvent<HTMLInputElement>) => void;
   value: string;
};

export default function ListFinder({ onChange, value }: Props) {
   return (
      <RevealHorizontal fromRight>
         <div className="h-10 w-72 px-5 shadow-xl bg-secondary-light dark:bg-secondary-dark flex items-center rounded-lg">
            <input
               type="text"
               placeholder="Search for a List"
               className="flex-1 bg-transparent h-full outline-none text-text-2 placeholder:text-text-2"
               onChange={onChange}
               value={value}
            />
            <span className="material-symbols-outlined text-text-3">
               search
            </span>
         </div>
      </RevealHorizontal>
   );
}
