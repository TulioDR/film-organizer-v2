import React from "react";
import NavTitle from "../NavTitle";
import DarkModeButton from "./DarkModeButton";
import NavDropdown from "./NavDropdown";
import NavSearch from "./NavSearch";
import NavItems from "./NavItems";

type Props = {};

export default function Desktop({}: Props) {
   return (
      <div className="w-full z-20 absolute top-2 h-12 flex justify-center pointer-events-auto">
         <div className="flex items-center w-[410px]">
            <NavTitle />
         </div>
         <div className="flex flex-1 justify-between pl-4">
            <NavItems />
            <div className="flex gap-4">
               <NavSearch />
               <NavDropdown />
               <DarkModeButton />
            </div>
         </div>
      </div>
   );
}
