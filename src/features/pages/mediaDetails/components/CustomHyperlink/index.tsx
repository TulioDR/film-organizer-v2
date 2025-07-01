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
         className={`w-full block rounded-xl overflow-hidden relative ${
            horizontal ? "aspect-video" : "aspect-[2/3]"
         }`}
      >
         <motion.div
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
         <FrontIcon logo={logo} isHovered={isHovered} transition={transition} />
      </motion.a>
   );
}
