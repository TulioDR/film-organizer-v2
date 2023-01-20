import React from "react";

type Props = {
   onChange: (e: React.FormEvent<HTMLInputElement>) => void;
   value: string;
};

export default function ListFinder({ onChange, value }: Props) {
   return (
      <div className="h-9 w-72 px-5 bg-light-bg-secondary dark:bg-dark-bg-secondary flex items-center rounded-lg">
         <input
            type="text"
            placeholder="Search for a List"
            className="flex-1 bg-transparent h-full outline-none text-light-text-normal dark:text-dark-text-normal placeholder:text-light-text-soft placeholder:dark:text-dark-text-soft"
            onChange={onChange}
            value={value}
         />
         <span className="material-icons text-light-text-soft dark:text-dark-text-soft">
            search
         </span>
      </div>
   );
}
