import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";
import MainMenu from "./menus/MainMenu";
import ThemeColorsMenu from "./menus/ThemeColorsMenu";
import UserImage from "./UserImage";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import { popUpAnimation } from "@/animations/PopUpAnimation";
import { useUser } from "@clerk/nextjs";

export default function NavDropdown() {
   const { user } = useUser();

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

   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   return (
      <motion.div
         variants={popUpAnimation}
         tabIndex={0}
         onBlur={handleBlur}
         className="relative p-[2px] rounded-full h-9 aspect-square"
         style={{ backgroundColor: themeColor }}
      >
         <button
            onClick={toggle}
            className="h-full w-full rounded-full overflow-hidden shadow-lg relative"
         >
            {user ? (
               <UserImage />
            ) : (
               <div className="w-full h-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">person</span>
               </div>
            )}
         </button>
         {isOpen && (
            <DropdownMenu divKey={menu} elRef={dropdownRef} height={menuHeight}>
               {menu === "main" && (
                  <MainMenu setIsOpen={setIsOpen} setMenu={setMenu} />
               )}
               {menu === "colors" && <ThemeColorsMenu setMenu={setMenu} />}
            </DropdownMenu>
         )}
      </motion.div>
   );
}
