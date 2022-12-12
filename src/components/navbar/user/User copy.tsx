import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import { motion } from "framer-motion";

export default function User() {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => setIsOpen(!isOpen);

   const [isDark, setIsDark] = useState<boolean>(true);
   const toggleTheme = () => setIsDark(!isDark);

   useEffect(() => {
      const root = window.document.documentElement;
      if (isDark) root.classList.add("dark");
      else root.classList.remove("dark");
   }, [isDark]);

   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

   const logOut = () => {
      setIsLoggedIn(false);
   };
   const logIn = () => {
      setIsLoggedIn(true);
   };

   // const handleBlur = () => {
   //    setIsOpen(false);
   // };

   const [selectThemeColor, setSelectThemeColor] = useState<boolean>(false);
   const toggleSelectThemeColor = () => {
      setSelectThemeColor(!selectThemeColor);
   };

   return (
      <div className="flex">
         <div
            // tabIndex={0}
            // onBlur={handleBlur}

            className="relative"
         >
            {isLoggedIn ? (
               <div className="h-9 w-9 rounded-full bg-gray-500 cursor-pointer"></div>
            ) : (
               <button
                  onClick={toggle}
                  className="grid place-content-center h-9 w-9 rounded-full hover:bg-blue-500"
               >
                  <span className="material-icons">settings</span>
               </button>
            )}
            {isOpen && (
               <div className="w-60 absolute top-full right-0 text-sm">
                  <motion.div
                     layout
                     className="bg-gray-500 rounded-lg overflow-hidden w-full py-2"
                  >
                     {selectThemeColor ? (
                        <ul>
                           <UserItem onClick={toggleTheme}>Red</UserItem>
                           <UserItem onClick={toggleTheme}>Blue</UserItem>
                           <UserItem onClick={toggleTheme}>Magenta</UserItem>
                           <UserItem onClick={toggleTheme}>Grey</UserItem>
                           <UserItem onClick={toggleSelectThemeColor}>
                              go Back
                           </UserItem>
                        </ul>
                     ) : (
                        <ul>
                           <UserItem onClick={toggleTheme}>
                              {isDark ? "Dark" : "Light"} Theme
                           </UserItem>
                           <UserItem onClick={toggleSelectThemeColor}>
                              Theme Color
                           </UserItem>
                           {isLoggedIn ? (
                              <UserItem onClick={logOut}>Log out</UserItem>
                           ) : (
                              <UserItem onClick={logIn}>
                                 Log in / Sign up
                              </UserItem>
                           )}
                        </ul>
                     )}
                  </motion.div>
               </div>
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
