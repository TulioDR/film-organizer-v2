import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import useThemeContext from "../../../context/ThemeContext";
import DropdownMenu from "./DropdownMenu";
import MainMenu from "./menus/MainMenu";
import ThemeColorsMenu from "./menus/ThemeColorsMenu";
import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";

export default function User() {
   const { themeColor } = useThemeContext();
   const user = useUser();

   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => {
      setIsOpen(!isOpen);
      setMenu("main");
   };
   const handleBlur = () => {
      setIsOpen(false);
   };

   const dropdownRef = useRef<HTMLDivElement>(null);

   const [menu, setMenu] = useState<"main" | "colors">("main");
   const [menuHeight, setMenuHeight] = useState<number | "auto">("auto");

   useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstElementChild!.clientHeight!);
   }, [menu]);

   return (
      <div className="flex">
         <div tabIndex={0} onBlur={handleBlur} className="relative">
            {user ? (
               <div
                  onClick={toggle}
                  className="h-9 w-9 rounded-full bg-gray-light dark:bg-gray-dark cursor-pointer"
               ></div>
            ) : (
               <motion.button
                  onClick={toggle}
                  whileHover={{
                     backgroundColor: themeColor,
                  }}
                  transition={{ duration: 0 }}
                  className="grid place-content-center h-9 w-9 rounded-full"
               >
                  <span className="material-icons">settings</span>
               </motion.button>
            )}
            {isOpen && (
               <DropdownMenu
                  divKey={menu}
                  elRef={dropdownRef}
                  height={menuHeight}
               >
                  {menu === "main" && (
                     <MainMenu setIsOpen={setIsOpen} setMenu={setMenu} />
                  )}
                  {menu === "colors" && <ThemeColorsMenu setMenu={setMenu} />}
               </DropdownMenu>
            )}
         </div>
         {!user && (
            <Link
               href="/auth"
               className="h-9 px-4 bg-gray-light dark:bg-gray-dark cursor-pointer ml-2 hidden sm:flex items-center"
            >
               Log in
            </Link>
         )}
      </div>
   );
}
