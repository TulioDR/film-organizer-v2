import React from "react";

type Props = {
   onChange: (e: React.FormEvent<HTMLInputElement>) => void;
   value: string;
};

export default function ListFinder({ onChange, value }: Props) {
   return (
      <div className="h-10 w-72 px-5 bg-white dark:bg-black border border-border-light dark:border-border-dark flex items-center rounded-lg">
         <input
            type="text"
            placeholder="Search for a List"
            className="flex-1 bg-transparent h-full outline-none text-text-2 placeholder:text-text-2"
            onChange={onChange}
            value={value}
         />
         <span className="material-symbols-outlined text-text-3">search</span>
      </div>
   );
}
