import React from "react";
import NavTitle from "../NavTitle";
import DarkModeButton from "./DarkModeButton";
import NavDropdown from "./NavDropdown";
import NavSearch from "./NavSearch";
import NavItems from "./NavItems";

type Props = {};

export default function Desktop({}: Props) {
   return (
      <div className="w-full z-20 fixed top-0 left-0 bg-white dark:bg-black h-20 border-b border-border-light dark:border-border-dark flex justify-center pointer-events-auto py-4 px-32">
         <div className="flex items-center w-[410px]">
            <NavTitle />
         </div>
         <div className="flex flex-1 justify-between pl-4">
            <NavItems />
            <div className="flex gap-4 h-full items-center">
               <NavSearch />
               <NavDropdown />
               <DarkModeButton />
            </div>
         </div>
      </div>
   );
}
