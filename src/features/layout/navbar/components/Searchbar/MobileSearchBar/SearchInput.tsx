import React, { useEffect, useRef } from "react";
import ToggleTypeButton from "./ToggleTypeButton";

type Props = {
   isMovie: boolean;
   toggleMediaType: () => void;
   value: string;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
   isMovie,
   toggleMediaType,
   value,
   onChange,
}: Props) {
   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (!inputRef.current) return;
      inputRef.current.focus();
      return () => {
         if (!inputRef.current) return;
         inputRef.current.blur();
      };
   }, []);

   return (
      <div className="h-16 w-full pl-16 flex">
         <div className="flex-1 p-2 h-full">
            <input
               ref={inputRef}
               value={value}
               onChange={onChange}
               placeholder={`Search ${isMovie ? "movies" : "TV series"}...`}
               className="flex-1 h-full text-black placeholder:text-border outline-none w-full bg-white shadow-md rounded-md px-2"
            />
         </div>
         <ToggleTypeButton onClick={toggleMediaType} isMovie={isMovie} />
      </div>
   );
}
