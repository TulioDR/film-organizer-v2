// import { useClerk, useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";

type Props = {};

export default function NavDropdown({}: Props) {
   // const { signOut } = useClerk();

   // const logOut = async () => {
   //    signOut();
   // };

   // const user = useUser();
   // useEffect(() => {
   //    console.log(user);
   // }, []);

   return (
      <div
         // onClick={logOut}
         className="flex mr-4 2xl:mr-16 rounded-md border border-border-light dark:border-border-dark bg-primary-light dark:bg-primary-dark items-center h-12 px-2 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
      >
         <div className="h-full flex items-center justify-center">
            <span className="material-symbols-outlined">person</span>
         </div>
         <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </div>
   );
}
