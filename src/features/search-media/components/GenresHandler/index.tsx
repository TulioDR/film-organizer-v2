import React, { useEffect } from "react";
import GenresButton from "./GenresButton";
import { AnimatePresence } from "framer-motion";
import GenresSelector from "./GenresSelector";
import { useRouter } from "next/router";

type Props = {
   mediaType: "movie" | "tv";
};

export default function GenresHandler({ mediaType }: Props) {
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
         className={`fixed top-0 left-0 w-full h-screen z-40 duration-300 pl-32 pr-24 pt-44 pb-8 ${
            isOpen ? "bg-black/80" : "pointer-events-none"
         }`}
      >
         {/* <GenresButton onClick={handleToggle} isOpen={isOpen} /> */}
         <AnimatePresence>
            {isOpen && <GenresSelector mediaType={mediaType} />}
         </AnimatePresence>
      </div>
   );
}
