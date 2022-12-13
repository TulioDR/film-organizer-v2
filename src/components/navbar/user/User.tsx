import { useEffect, useRef, useState } from "react";
import Main from "./Main";
import MenuContainer from "./MenuContainer";
import ThemeColors from "./ThemeColors";
import { motion } from "framer-motion";
import useThemeContext from "../../../context/ThemeContext";

export default function User() {
   const { themeColor } = useThemeContext();

   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => {
      setIsOpen(!isOpen);
      setMenu("main");
   };
   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
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
            {isLoggedIn ? (
               <div
                  onClick={toggle}
                  className="h-9 w-9 rounded-full dark:bg-gray-500 cursor-pointer"
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
               <MenuContainer
                  divKey={menu}
                  elRef={dropdownRef}
                  height={menuHeight}
               >
                  {menu === "main" && (
                     <Main
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        setIsOpen={setIsOpen}
                        setMenu={setMenu}
                     />
                  )}
                  {menu === "colors" && <ThemeColors setMenu={setMenu} />}
               </MenuContainer>
            )}
         </div>
         {!isLoggedIn && (
            <button
               onClick={() => setIsLoggedIn(true)}
               className="h-9 px-4 bg-gray-500 cursor-pointer ml-2 hidden sm:block"
            >
               Log in
            </button>
         )}
      </div>
   );
}
