import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

interface Props {
   children: React.ReactNode;
   isOpen: boolean;
}

export default function ModalPortal({ children, isOpen }: Props) {
   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return <></>;
   return createPortal(
      <AnimatePresence>{isOpen && children}</AnimatePresence>,
      document.getElementById("modals-container")!
   );
}
