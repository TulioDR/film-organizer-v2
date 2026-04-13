import React from "react";

type Props = {
   inputRef: React.RefObject<HTMLInputElement | null>;
   value: string;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   onFocus: () => void;
   handleKeyDown: (e: React.KeyboardEvent) => void;
   onBlur: () => void;
};

export default function PlaylistCardInput({
   inputRef,
   value,
   onChange,
   onFocus,
   handleKeyDown,
   onBlur,
}: Props) {
   return (
      <input
         ref={inputRef}
         value={value}
         type="text"
         onFocus={onFocus}
         onBlur={onBlur}
         onChange={onChange}
         onKeyDown={handleKeyDown}
         // maxLength={12}
         autoComplete="off"
         className="h-full flex items-center w-full outline-none bg-transparent text-3xl font-thin text-black dark:text-white"
      />
   );
}
