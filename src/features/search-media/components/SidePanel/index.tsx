import React, { useEffect, useState } from "react";
import SidePanelContainer from "./SidePanelContainer";
import ToggleButton from "./ToggleButton";
import { createPortal } from "react-dom";
import { useRouter } from "next/router";
import { useLenis } from "lenis/react";

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
   const [isOpen, setIsOpen] = useState(false);
   const togglePanel = () => setIsOpen((prev) => !prev);

   const router = useRouter();
   useEffect(() => setIsOpen(false), [router.asPath]);

   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => setIsMounted(true), []);

   const [rounded, setRounded] = useState(true);
   const onAnimationStart = (e: any) => {
      if (e.x === "0%") setRounded(false);
   };
   const onAnimationComplete = (e: any) => {
      if (e.x === "100%") setRounded(true);
   };

   useEffect(() => {
      if (initialOpen === undefined) return;
      setIsOpen(initialOpen);
   }, [initialOpen]);

   const lenis = useLenis();
   useEffect(() => {
      if (!lenis) return;
      if (isOpen) lenis.stop();
      else lenis.start();
   }, [lenis, isOpen]);

   if (!isMounted) return <></>;
   return createPortal(
      <div className="fixed top-0 left-0 h-[100svh] w-full pl-32 pr-24 pt-44 pb-8 pointer-events-none bg-red-400">
         <ToggleButton
            onClick={togglePanel}
            isOpen={isOpen}
            icon={isOpen ? "close" : buttonIcon}
            rounded={rounded}
         />
         <SidePanelContainer
            onAnimationStart={onAnimationStart}
            onAnimationComplete={onAnimationComplete}
            isOpen={isOpen}
         >
            {children}
         </SidePanelContainer>
      </div>,
      document.getElementById("side-panel-container")!,
   );
}
