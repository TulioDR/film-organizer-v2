import React from "react";
import SearchInput from "./SearchInput";
import ReactLenis from "lenis/react";

type Props = {};

export default function MobileSearchbar({}: Props) {
   return (
      <div className="w-full h-full flex flex-col">
         <SearchInput />
         <ReactLenis className="w-full flex-1 overflow-hidden flex flex-col bg-red-500 border-4 border-yellow-500"></ReactLenis>
      </div>
   );
}
