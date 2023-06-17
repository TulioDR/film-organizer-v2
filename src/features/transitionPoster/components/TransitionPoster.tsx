import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PositionModel } from "../../../models/TransitionPosterModels";
import { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";

type Props = {
   selectedImg: string | null;
   position: PositionModel;
   onAnimationComplete: () => void;
   closePoster: () => void;
   showSpinner: boolean;
};

export default function TransitionPoster({
   selectedImg,
   position,
   onAnimationComplete,
   closePoster,
   showSpinner,
}: Props) {
   const { top, left, height } = position;

   const [sidebarWidth, setSidebarWidth] = useState<number>(0);
   useEffect(() => {
      const sidebar = document.getElementById("sidebar")!;
      setSidebarWidth(sidebar.clientWidth);
   }, []);

   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   return (
      <AnimatePresence>
         {selectedImg && (
            <motion.div
               onAnimationComplete={onAnimationComplete}
               initial={{ top: top, x: left, height }}
               animate={{ top: 96, x: 40, height: "calc(100vh - 136px)" }}
               transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1] }}
               className="fixed top-0 left-0 w-full pr-10 flex"
               style={{ paddingLeft: sidebarWidth }}
               onClick={closePoster}
            >
               <div className="relative h-full aspect-[2/3] rounded-2xl overflow-hidden">
                  <Image
                     alt="selected"
                     src={selectedImg}
                     fill
                     sizes="100%"
                     priority
                  />
               </div>
               <div className="flex-1 h-full flex items-center justify-center">
                  {showSpinner && (
                     <SpinnerCircular
                        size={"20%"}
                        thickness={100}
                        speed={150}
                        color={themeColor}
                        secondaryColor="transparent"
                     />
                  )}
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
