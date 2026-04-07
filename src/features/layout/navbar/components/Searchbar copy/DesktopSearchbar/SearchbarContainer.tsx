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
         className={`pointer-events-none flex items-center w-72 h-full z-50
            ${isHome ? "" : "justify-center"}
         `}
      >
         <motion.form
            layout="position"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onSubmit={handleSubmit}
            className="h-16 relative pointer-events-auto w-full"
         >
            {children}
         </motion.form>
      </div>
   );
}
