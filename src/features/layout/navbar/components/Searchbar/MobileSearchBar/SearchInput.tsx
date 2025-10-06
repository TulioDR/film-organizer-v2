import React, { useEffect, useRef } from "react";

type Props = {};

export default function SearchInput({}: Props) {
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
      <div className="h-16 w-full pl-16">
         <div className="flex-1 px-2 py-2 h-full">
            <input
               ref={inputRef}
               placeholder="Search..."
               className="w-full h-full bg-white rounded-md shadow-md px-2 text-sm text-black placeholder:text-border outline-none"
            />
         </div>
      </div>
   );
}
