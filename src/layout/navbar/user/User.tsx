import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";
import MainMenu from "./menus/MainMenu";
import ThemeColorsMenu from "./menus/ThemeColorsMenu";
import { useUser } from "@supabase/auth-helpers-react";
import UserImage from "./UserImage";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";

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

   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   return (
      <div
         tabIndex={0}
         onBlur={handleBlur}
         className="relative p-[2px] rounded-full h-9 aspect-square"
         style={{
            background: `linear-gradient(to top right, #a6a6a6 20%, ${themeColor} 100%)`,
         }}
      >
         <motion.button
            onClick={toggle}
            className="grid place-content-center h-full w-full rounded-full overflow-hidden shadow-lg relative p-1"
         >
            {user ? (
               <UserImage />
            ) : (
               <span className="material-icons">user</span>
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
