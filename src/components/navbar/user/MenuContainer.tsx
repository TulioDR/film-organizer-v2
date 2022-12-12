import { AnimatePresence, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   divKey: string;
   height: number | "auto";
   elRef: React.RefObject<HTMLDivElement>;
};

export default function MenuContainer({
   children,
   divKey,
   height,
   elRef,
}: Props) {
   return (
      <div className="w-72 absolute top-full right-0 text-sm p-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white drop-shadow-xl rounded-lg overflow-hidden">
         <motion.div
            animate={{
               height: height,
               transition: {
                  height: {
                     duration: 0.4,
                  },
               },
            }}
            className="relative"
         >
            <AnimatePresence initial={false}>
               <motion.div ref={elRef} key={divKey}>
                  {children}
               </motion.div>
            </AnimatePresence>
         </motion.div>
      </div>
   );
}
