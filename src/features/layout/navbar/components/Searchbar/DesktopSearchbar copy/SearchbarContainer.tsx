import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
   children: React.ReactNode;
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function SearchbarContainer({ children, handleSubmit }: Props) {
   const router = useRouter();
   const [isHome, setIsHome] = useState<boolean>(false);
   useEffect(() => {
      if (router.pathname === "/") setIsHome(true);
      else setIsHome(false);
   }, [router.pathname]);

   return (
      <div
         className={`pointer-events-none flex items-center fixed left-0 w-full h-16 z-50 px-24 xl:px-32
            ${isHome ? "top-1/2 -translate-y-1/2" : "justify-center"}
         `}
      >
         <div className="w-2/3 xl:w-1/2 flex justify-center">
            <motion.form
               layout="position"
               transition={{ duration: 0.6, ease: "easeInOut" }}
               onSubmit={handleSubmit}
               className="h-16 relative pointer-events-auto "
            >
               {children}
            </motion.form>
         </div>
      </div>
   );
}
