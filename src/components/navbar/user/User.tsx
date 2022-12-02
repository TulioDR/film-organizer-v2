import { useEffect, useState } from "react";
import UserItem from "./UserItem";

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

   //60357297
   return (
      <div className="flex">
         <div onClick={toggle} className="relative">
            {isLoggedIn ? (
               <div className="h-9 w-9 rounded-full bg-gray-500 cursor-pointer"></div>
            ) : (
               <button className="grid place-content-center h-9 w-9 rounded-full hover:bg-blue-500">
                  <span className="material-icons">settings</span>
               </button>
            )}
            {isOpen && (
               <ul className="w-60 bg-gray-500 rounded-lg py-2 absolute top-full right-0 text-sm">
                  <UserItem onClick={toggleTheme}>
                     {isDark ? "Dark" : "Light"} Theme
                  </UserItem>
                  <UserItem onClick={toggleTheme}>Theme Color</UserItem>
                  {isLoggedIn ? (
                     <UserItem onClick={logOut}>Log out</UserItem>
                  ) : (
                     <UserItem onClick={logIn}>Log in / Sign up</UserItem>
                  )}
               </ul>
            )}
         </div>
         {!isLoggedIn && (
            <button
               onClick={() => setIsLoggedIn(true)}
               className="h-9 px-4 bg-gray-500 cursor-pointer ml-2"
            >
               Log in
            </button>
         )}
      </div>
   );
}
