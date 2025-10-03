import React, { useEffect, useState } from "react";
import FixedUIPortal from "@/features/layout/main-layout/components/FixedUIPortal";
import { useRouter } from "next/router";
import MenuContainer from "./MenuContainer";
import HandlerContainer from "./HandlerContainer";
import ToggleButton from "./ToggleButton";

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
         <HandlerContainer position={position} isAnimating={isAnimating}>
            {renderItem ? (
               renderItem({ toggleMenu, isOpen })
            ) : (
               <ToggleButton
                  onClick={toggleMenu}
                  icon={isOpen ? "close" : buttonIcon}
               />
            )}
         </HandlerContainer>
         <MenuContainer
            isOpen={isOpen}
            position={position}
            onExitComplete={onExitComplete}
         >
            {children}
         </MenuContainer>
      </FixedUIPortal>
   );
}
