import { usePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function usePanelState(
   openAnimation: () => void,
   closeAnimation: () => void,
   initiallyOpen?: true
) {
   const [isPresent, safeToRemove] = usePresence();

   const [isOpen, setIsOpen] = useState(false);
   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => setIsMounted(true), []);

   useEffect(() => {
      if (!isMounted) return;
      if (!initiallyOpen) return;
      setTimeout(() => {
         openAnimation();
         setIsOpen(true);
      }, 500);
   }, [initiallyOpen, isMounted]);

   const togglePanel = () => {
      if (!isOpen) openAnimation();
      else closeAnimation();
      setIsOpen((prev) => !prev);
   };

   useEffect(() => {
      if (isPresent) return;
      const exitAnimation = async () => {
         if (isOpen) await closeAnimation();
         safeToRemove();
      };
      exitAnimation();
   }, [isPresent, isOpen]);

   return {};
}
