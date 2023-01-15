import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";
import MainMenu from "./menus/MainMenu";
import ThemeColorsMenu from "./menus/ThemeColorsMenu";
import { useUser } from "@supabase/auth-helpers-react";

export default function User() {
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
      <div tabIndex={0} onBlur={handleBlur} className="relative">
         <motion.button
            onClick={toggle}
            className="grid place-content-center h-9 w-9 rounded-full bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-lg"
         >
            {user ? (
               <span className="uppercase text-xl">
                  {user.email?.charAt(0)}
               </span>
            ) : (
               <span className="material-icons">settings</span>
            )}
         </motion.button>
         {isOpen && (
            <DropdownMenu divKey={menu} elRef={dropdownRef} height={menuHeight}>
               {menu === "main" && (
                  <MainMenu setIsOpen={setIsOpen} setMenu={setMenu} />
               )}
               {menu === "colors" && <ThemeColorsMenu setMenu={setMenu} />}
            </DropdownMenu>
         )}
      </div>
   );
}
