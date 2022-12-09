import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import useSidebarContext from "../context/SidebarContext";

type Props = {
   selectedImg: string | null;
};

export default function TransitionPoster({ selectedImg }: Props) {
   const { openSidebar } = useSidebarContext();
   return (
      <AnimatePresence>
         {selectedImg && (
            <div className={`fixed top-[76px] left-0 w-full flex pl-5 pr-10`}>
               <div
                  className={`h-full w-0 ${
                     openSidebar ? "lg:w-56" : "lg:w-14"
                  }`}
               ></div>
               <div className="flex-1">
                  <motion.div
                     layoutId={selectedImg}
                     className="w-2/3 mx-auto sm:mx-0 sm:w-1/2 md:w-2/5 aspect-[2/3] relative rounded-xl overflow-hidden details-height"
                  >
                     <Image
                        alt="selected"
                        src={selectedImg}
                        fill
                        sizes="100%"
                        priority
                     />
                  </motion.div>
               </div>
            </div>
         )}
      </AnimatePresence>
   );
}
