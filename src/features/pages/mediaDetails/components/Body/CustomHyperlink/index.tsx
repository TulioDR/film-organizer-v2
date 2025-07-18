import React, { useState } from "react";
import { motion } from "framer-motion";
import Poster from "@/components/Poster";
import FrontIcon from "./FrontIcon";

type Props = {
   href: string;
   posterPath: string;
   alt: string;
   logo: string;
   horizontal?: true;
   backPoster?: true;
   trailer?: true;
   person?: true;
   footer: React.ReactNode;
};

export default function CustomHyperlink({
   href,
   posterPath,
   alt,
   logo,
   horizontal,
   backPoster,
   trailer,
   person,
   footer,
}: Props) {
   const [isHovered, setIsHovered] = useState<boolean>(false);
   const onHoverStart = () => setIsHovered(true);
   const onHoverEnd = () => setIsHovered(false);

   const transition = { type: "spring", stiffness: 150, damping: 20, mass: 1 };

   return (
      <motion.a
         href={href}
         target="_blank"
         rel="noreferrer"
         onMouseEnter={onHoverStart}
         onMouseLeave={onHoverEnd}
         className="flex flex-col rounded-xl bg-white text-black overflow-hidden shadow-xl"
      >
         <motion.div
            className={`w-full overflow-hidden relative ${
               horizontal ? "aspect-video" : "aspect-[2/3]"
            }`}
         >
            <motion.div
               initial={false}
               animate={{ scale: isHovered ? 1.1 : 1 }}
               transition={transition}
               className="w-full h-full "
            >
               <Poster
                  alt={alt}
                  posterPath={posterPath}
                  size="md"
                  backPoster={backPoster}
                  trailer={trailer}
                  person={person}
               />
            </motion.div>
            <FrontIcon
               logo={logo}
               isHovered={isHovered}
               transition={transition}
            />
         </motion.div>
         {footer}
      </motion.a>
   );
}
