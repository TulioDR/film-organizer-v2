import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = { children: React.ReactNode };

export default function PaginationContainer({ children }: Props) {
   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return <></>;
   return createPortal(
      <AnimatePresence>{children}</AnimatePresence>,
      document.getElementById("main-layout")!
   );
}
