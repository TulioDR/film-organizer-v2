import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Clapperboard from "../Clapperboard";
import { useRouter } from "next/router";

type Props = {
   children: React.ReactNode;
};

export default function PageLoader({ children }: Props) {
   const router = useRouter();
   const [isLoading, setIsLoading] = React.useState(false);
   const startLoading = () => setIsLoading(true);

   useEffect(() => {
      let timeout: NodeJS.Timeout;
      const handleStart = () => {
         startLoading();
         timeout = setTimeout(() => startLoading(), 200);
      };
      router.events.on("routeChangeStart", handleStart);
      return () => {
         clearTimeout(timeout);
         router.events.off("routeChangeStart", handleStart);
      };
   }, [router, startLoading]);

   return (
      <>
         {isLoading && (
            <motion.div className="fixed top-0 left-0 h-screen w-full flex items-center justify-center z-50">
               <div className="w-1/5 rounded-full aspect-square bg-gray-200 flex flex-col items-center justify-center gap-2">
                  <div className="w-3/6 -rotate-[10deg]">
                     <Clapperboard withReel spinningReel />
                  </div>
                  {/* <div className="aspect-[10/2] w-[70%] bg-gray-800 flex items-center shadow-lg">
               <div className="border-y-2 border-white/20 w-full h-4/5 flex items-center justify-center">
                  <span className="font-title text-xl text-orange-300">
                     Loading...
                  </span>
               </div>
            </div> */}
               </div>
            </motion.div>
         )}
         <motion.div
            animate={{
               filter: isLoading ? "brightness(0.5)" : "brightness(1)",
            }}
            transition={{ duration: 0.4 }}
            className="pt-36 xl:pt-44 px-24 xl:px-32 lg:pb-4 xl:pb-8 min-h-screen flex flex-col"
         >
            {children}
         </motion.div>
      </>
   );
}
