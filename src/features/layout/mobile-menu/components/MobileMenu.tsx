import React, { useEffect, useState } from "react";
import FixedUIPortal from "@/features/layout/main-layout/components/FixedUIPortal";
import { useRouter } from "next/router";
import MobileMenuInnerContainer from "./MobileMenuInnerContainer";
import MobileMenuButtonContainer from "./MobileMenuButton/MobileMenuButtonContainer";
import GlassContainer from "@/common/components/GlassContainer";

type Props = {
   children: React.ReactNode;
   position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
   buttonIcon?: string;
   renderItem?: ({
      toggleMenu,
      isOpen,
   }: {
      toggleMenu: () => void;
      isOpen: boolean;
   }) => JSX.Element;
};

export default function MobileMenu({
   children,
   position,
   buttonIcon,
   renderItem,
}: Props) {
   const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => setIsOpen((prev) => !prev);

   const router = useRouter();
   useEffect(() => {
      setIsOpen(false);
   }, [router.asPath]);

   const [isAnimating, setIsAnimating] = useState(false);
   useEffect(() => {
      if (isOpen) setIsAnimating(true);
   }, [isOpen]);

   const onExitComplete = () => setIsAnimating(false);

   return (
      <FixedUIPortal>
         <MobileMenuButtonContainer
            position={position}
            isAnimating={isAnimating}
         >
            {renderItem ? (
               renderItem({ toggleMenu, isOpen })
            ) : (
               <GlassContainer
                  el="button"
                  onClick={toggleMenu}
                  className="flex items-center justify-center w-16 aspect-square"
               >
                  <span className="material-symbols-outlined">
                     {isOpen ? "close" : buttonIcon}
                  </span>
               </GlassContainer>
            )}
         </MobileMenuButtonContainer>
         {/* <MobileMenuButton
            onClick={toggleMenu}
            icon={isOpen ? "close" : buttonIcon}
            isAnimating={isAnimating}
            position={position}
         /> */}
         <MobileMenuInnerContainer
            isOpen={isOpen}
            position={position}
            onExitComplete={onExitComplete}
         >
            {children}
         </MobileMenuInnerContainer>
      </FixedUIPortal>
   );
}
