import Responsive from "@/common/components/Responsive";
import { LG_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Props = {};

export default function NavTitle({}: Props) {
   const router = useRouter();

   const [isHome, setIsHome] = useState<boolean>(false);
   useEffect(() => {
      if (router.pathname === "/") setIsHome(true);
      else setIsHome(false);
   }, [router.pathname]);

   return (
      <>
         <Responsive maxWidth={LG_MEDIA_QUERY}>
            <div
               className={`text-3xl w-full sm:text-4xl font-black uppercase flex items-center justify-center ${
                  isHome ? "fixed top-1/2 -translate-y-1/2 left-0" : "h-full"
               }`}
            >
               <motion.span layout="position" className="block">
                  Agrios
               </motion.span>
            </div>
         </Responsive>
         <Responsive minWidth={LG_MEDIA_QUERY}>
            <div className="text-5xl font-black flex items-center uppercase h-full">
               Agrios
            </div>
         </Responsive>
      </>
   );
}
