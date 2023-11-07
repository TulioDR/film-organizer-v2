import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
type Props = {
   children: React.ReactNode;
   open: boolean;
   tooltipPosition: any;
   onHoverStart: () => void;
   onHoverEnd: () => void;
};

export default function SideTooltipContainer({
   children,
   open,
   tooltipPosition,
   onHoverStart,
   onHoverEnd,
}: Props) {
   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return <></>;
   return createPortal(
      <AnimatePresence>
         {open && (
            <motion.div
               onHoverStart={onHoverStart}
               onHoverEnd={onHoverEnd}
               initial={{
                  top: tooltipPosition?.top,
                  left: tooltipPosition?.right,
                  opacity: 0,
               }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0 }}
               className="origin-left fixed z-50"
            >
               {children}
            </motion.div>
         )}
      </AnimatePresence>,
      document.getElementById("modals-container")!
   );
}
