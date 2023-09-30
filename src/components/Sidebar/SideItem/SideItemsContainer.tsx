import { AnimatePresence, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   tooltip?: true;
   tagPosition?: any;
   open: boolean;
};

export default function SideItemsContainer({
   children,
   tooltip,
   tagPosition,
   open,
}: Props) {
   const tooltipAnimation = {
      initial: {
         top: tagPosition?.top,
         left: tagPosition?.right,
         scale: 0.9,
         opacity: 0,
      },
      animate: { scale: 1, opacity: 1, transition: { duration: 0.1 } },
      exit: { scale: 0.9, opacity: 0, transition: { duration: 0.1 } },
   };

   const ddAnimation = {
      initial: { height: 0 },
      animate: { height: "auto", transition: { duration: 0.3 } },
      exit: { height: 0, transition: { duration: 0.3 } },
   };

   return (
      <AnimatePresence>
         {open && (
            <motion.div
               variants={tooltip ? tooltipAnimation : ddAnimation}
               initial="initial"
               animate="animate"
               exit="exit"
               className={`${
                  tooltip ? "origin-left fixed z-10 " : "overflow-hidden"
               }`}
            >
               <div
                  className={`px-5 bg-secondary-light text-light-1 dark:bg-secondary-dark dark:text-dark-1 shadow-xl rounded-xl ${
                     tooltip ? "" : "mt-2"
                  }`}
               >
                  {children}
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
