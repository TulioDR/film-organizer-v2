import React from "react";
import RevealHorizontal from "../../animations/RevealHorizontal";

type Props = {
   onChange: (e: React.FormEvent<HTMLInputElement>) => void;
   value: string;
};

export default function ListFinder({ onChange, value }: Props) {
   return (
      <RevealHorizontal fromRight>
         <div className="h-9 w-72 px-5 bg-dark-bg-secondary flex items-center rounded-lg">
            <input
               type="text"
               placeholder="Search for a List"
               className="flex-1 bg-transparent h-full outline-none text-dark-text-normal placeholder:text-dark-text-soft"
               onChange={onChange}
               value={value}
            />
            <span className="material-icons text-dark-text-soft">search</span>
         </div>
      </RevealHorizontal>
   );
}
