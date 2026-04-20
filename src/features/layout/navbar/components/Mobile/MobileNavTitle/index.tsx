import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {};

export default function MobileNavTitle({}: Props) {
   const router = useRouter();

   const [isHome, setIsHome] = useState<boolean>(false);
   useEffect(() => {
      if (router.pathname === "/") setIsHome(true);
      else setIsHome(false);
   }, [router.pathname]);

   return (
      <div className="h-14">
         <div
            className={`text-3xl font-semibold flex items-center justify-center ${
               isHome
                  ? "fixed top-1/2 -translate-y-1/2 left-0 text-white w-screen h-screen pointer-events-none"
                  : "h-full text-black dark:text-white"
            }`}
         >
            <motion.span layout="position" className="block">
               FilmVue
            </motion.span>
         </div>
      </div>
   );
}
