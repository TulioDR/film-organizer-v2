import { AnimatePresence, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   open: boolean;
};

export default function SideDropdownContainer({ children, open }: Props) {
   return (
      <AnimatePresence>
         {open && (
            <motion.div
               initial={{ height: 0 }}
               animate={{ height: "auto" }}
               exit={{ height: 0 }}
               transition={{ duration: 0.3 }}
               className="overflow-hidden"
            >
               <div className="pb-[10px] px-[10px]">{children}</div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
