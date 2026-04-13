import { AnimatePresence, motion } from "framer-motion";

type Props = {
   title: string;
};

export default function PageTitle({ title }: Props) {
   return (
      <div className="h-12 xl:h-16 flex items-center z-20 overflow-hidden">
         <AnimatePresence mode="wait" propagate>
            <motion.div
               key={title}
               initial={{ y: "100%" }}
               animate={{ y: "0%" }}
               exit={{ y: "-100%" }}
               transition={{ duration: 0.4 }}
               className="h-full flex items-center"
            >
               <span className="text-4xl xl:text-6xl uppercase font-thin">
                  {title}
               </span>
            </motion.div>
         </AnimatePresence>
      </div>
   );
}
