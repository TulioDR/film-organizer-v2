import React, { useEffect, useState } from "react";
import MobileNavButton from "./MobileNavButton";
import { AnimatePresence } from "framer-motion";
import MobileNavMenu from "./MobileNavMenu";
import FixedUIPortal from "@/features/layout/main-layout/components/FixedUIPortal";
import { useRouter } from "next/router";

type Props = {};

export default function MobileNav({}: Props) {
   const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => setIsOpen((prev) => !prev);

   const router = useRouter();
   useEffect(() => {
      setIsOpen(false);
   }, [router.asPath]);

   return (
      <FixedUIPortal>
         <MobileNavButton
            onClick={toggleMenu}
            icon={isOpen ? "close" : "menu"}
         />
         <AnimatePresence>{isOpen && <MobileNavMenu />}</AnimatePresence>,
      </FixedUIPortal>
   );
}
