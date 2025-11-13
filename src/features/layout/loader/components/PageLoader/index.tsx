import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Clapperboard from "../Clapperboard";
import { useRouter } from "next/router";
import useAppSelector from "@/store/hooks/useAppSelector";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { loaderActions } from "@/store/slices/loader-slice";

type Props = {
   children: React.ReactNode;
};

export default function PageLoader({ children }: Props) {
   const router = useRouter();
   const dispatch = useAppDispatch();
   const { isLoading } = useAppSelector((state) => state.loader);

   useEffect(() => {
      let timeout: NodeJS.Timeout;
      const handleStart = (url: string) => {
         if (url === router.asPath) return;
         timeout = setTimeout(() => {
            dispatch(loaderActions.startLoading());
         }, 200);
      };

      router.events.on("routeChangeStart", handleStart);
      return () => {
         clearTimeout(timeout);
         router.events.off("routeChangeStart", handleStart);
      };
   }, [router]);

   return (
      <>
         {isLoading && (
            <div className="fixed top-0 left-0 h-screen w-full flex items-center justify-center z-50">
               <div className="w-96 rounded-md aspect-square bg-gray-200 flex flex-col items-center justify-center gap-2">
                  <div className="aspect-[10/2] w-[70%]" />
                  <div className="w-3/6 -rotate-[10deg] origin-bottom-left">
                     <Clapperboard withReel spinningReel />
                  </div>
                  <div className="aspect-[10/2] w-[70%] bg-gray-800 flex items-center shadow-lg">
                     <div className="border-y-2 border-white/20 w-full h-4/5 flex items-center justify-center">
                        <span className="font-title text-xl text-orange-300">
                           Loading...
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         )}
         {/* <div id="side-panel-container" className="w-full">
            <motion.div
               id="main-content"
               animate={{
                  filter: isLoading ? "brightness(0.3)" : "brightness(1)",
               }}
               transition={{ duration: 0.3 }}
               className="pt-32 lg:pt-32 px-4 lg:px-16 pb-24 xl:pb-8 min-h-screen flex flex-col"
            >
               {children}
            </motion.div>
         </div> */}
         <div id="side-panel-container" className="w-full">
            <motion.div
               id="main-content"
               animate={{
                  filter: isLoading ? "brightness(0.3)" : "brightness(1)",
               }}
               transition={{ duration: 0.3 }}
               className="pt-32 lg:pt-32 px-4 lg:px-32 pb-24 xl:pb-24"
            >
               {children}
            </motion.div>
         </div>
      </>
   );
}
