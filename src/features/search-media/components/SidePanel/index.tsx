import React, { useEffect, useState } from "react";
import SidePanelContainer from "./SidePanelContainer";
import ToggleButton from "./ToggleButton";
import { createPortal } from "react-dom";
import { useAnimate, usePresence } from "framer-motion";

type Props = {
   children: React.ReactNode;
   buttonIcon: string;
   initialOpen?: boolean;
};

export default function SidePanel({
   children,
   buttonIcon,
   initialOpen,
}: Props) {
   const [scope, animate] = useAnimate();
   const [isPresent, safeToRemove] = usePresence();
   const [overflow, setOverflow] = useState(false);

   const [isOpen, setIsOpen] = useState(false);

   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => setIsMounted(true), []);

   const [showBorder, setShowBorder] = useState(false);

   const openAnimation = async () => {
      const duration = 0.4;
      animate(".first", { x: "0%" }, { duration });
      await animate(".second", { x: "0%" }, { duration });
      setOverflow(true);
   };
   const closeAnimation = async () => {
      const duration = 0.4;
      setOverflow(false);
      animate(".first", { x: "-100%" }, { duration });
      await animate(".second", { x: "100%" }, { duration });
      animate(".second", { x: "-100%" }, { duration: 0 });
      animate(".first", { x: "100%" }, { duration: 0 });
   };

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

   useEffect(() => {
      if (initialOpen === undefined) return;
      setIsOpen(initialOpen);
      if (initialOpen) openAnimation();
   }, [initialOpen]);

   const onUpdate = (e: any) => {
      const percentage = e.x;
      const number = Math.trunc(Number(percentage.replace("%", "")));
      if (number === 100 || number === -100) {
         setShowBorder(false);
         return;
      }
      setShowBorder(number >= 0);
   };

   if (!isMounted) return <></>;
   return createPortal(
      <div
         ref={scope}
         className="fixed top-0 left-0 h-screen w-full z-20 pl-32 pr-24 pt-44 pb-8 pointer-events-none"
      >
         <ToggleButton
            onClick={togglePanel}
            isOpen={isOpen}
            icon={isOpen ? "close" : buttonIcon}
            showBorder={showBorder}
         />
         <SidePanelContainer onUpdate={onUpdate} overflow={overflow}>
            {children}
         </SidePanelContainer>
      </div>,
      document.getElementById("side-panel-container")!
   );
}
