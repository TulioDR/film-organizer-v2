import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";
import MainMenu from "./menus/MainMenu";
import ThemeColorsMenu from "./menus/ThemeColorsMenu";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import GlassContainer from "@/components/GlassContainer";

export default function NavDropdown() {
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
      <GlassContainer className="h-full relative p-2">
         <motion.button
            tabIndex={0}
            onBlur={handleBlur}
            onClick={toggle}
            className="rounded-full h-full aspect-square overflow-hidden"
            style={{ backgroundColor: themeColor }}
         >
            <div className="w-full h-full flex items-center justify-center text-white">
               <span className="material-symbols-outlined">person</span>
            </div>
            {/* {user ? (
               <UserImage />
            ) : (
               <div className="w-full h-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">person</span>
               </div>
            )} */}
         </motion.button>
         {isOpen && (
            <DropdownMenu divKey={menu} elRef={dropdownRef} height={menuHeight}>
               {menu === "main" && (
                  <MainMenu setIsOpen={setIsOpen} setMenu={setMenu} />
               )}
               {menu === "colors" && <ThemeColorsMenu setMenu={setMenu} />}
            </DropdownMenu>
         )}
      </GlassContainer>
   );
}
