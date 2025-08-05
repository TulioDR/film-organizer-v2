import React, { useEffect } from "react";
import GenresButton from "./GenresButton";
import { AnimatePresence } from "framer-motion";
import GenresSelector from "./GenresSelector";
import { useRouter } from "next/router";

type Props = {};

export default function GenresHandler({}: Props) {
   const [isOpen, setIsOpen] = React.useState<boolean>(false);

   const handleToggle = () => {
      setIsOpen((prev) => !prev);
   };

   const router = useRouter();
   useEffect(() => {
      setIsOpen(false);
   }, [router.asPath]);
   return (
      <div
         className={`fixed top-0 left-0 w-full h-full z-40 duration-300 px-32 pt-44 pb-8  ${
            isOpen ? "bg-black/80" : "pointer-events-none"
         }`}
      >
         <GenresButton onClick={handleToggle} />
         <AnimatePresence>{isOpen && <GenresSelector />}</AnimatePresence>
      </div>
   );
}
