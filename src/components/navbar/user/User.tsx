import { useEffect, useRef, useState } from "react";
import Main from "./Main";
import MenuContainer from "./MenuContainer";
import ThemeColors from "./ThemeColors";

export default function User() {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => {
      setIsOpen(!isOpen);
      setMenu("main");
   };
   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
   // const handleBlur = () => {
   //    setIsOpen(false);
   // };

   const dropdownRef = useRef<HTMLDivElement>(null);

   const [menu, setMenu] = useState<"main" | "colors">("main");
   const [menuHeight, setMenuHeight] = useState<number | "auto">("auto");

   useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstElementChild!.clientHeight!);
   }, [menu]);

   const [isDark, setIsDark] = useState<boolean>(true);
   const toggleTheme = () => setIsDark(!isDark);

   useEffect(() => {
      const root = window.document.documentElement;
      if (isDark) root.classList.add("dark");
      else root.classList.remove("dark");
   }, [isDark]);
   return (
      <div className="flex">
         <div
            // tabIndex={0}
            // onBlur={handleBlur}

            className="relative"
         >
            {isLoggedIn ? (
               <div className="h-9 w-9 rounded-full dark:bg-gray-500 cursor-pointer"></div>
            ) : (
               <button
                  onClick={toggle}
                  className="grid place-content-center h-9 w-9 rounded-full hover:bg-blue-500"
               >
                  <span className="material-icons">settings</span>
               </button>
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
                        isDark={isDark}
                        setMenu={setMenu}
                        toggleTheme={toggleTheme}
                     />
                  )}
                  {menu === "colors" && <ThemeColors setMenu={setMenu} />}
               </MenuContainer>
            )}
         </div>
      </div>
   );
}

{
   /* {!isLoggedIn && (
            <button
               onClick={() => setIsLoggedIn(true)}
               className="h-9 px-4 bg-gray-500 cursor-pointer ml-2"
            >
               Log in
            </button>
         )} */
}
