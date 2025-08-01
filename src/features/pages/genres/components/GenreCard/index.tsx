import { motion } from "framer-motion";

import GenreImage from "./GenreImage";

import GenreModel from "../../models/GenreModel";

import { useState } from "react";
import { useRouter } from "next/router";

type Props = {
   genre: GenreModel;
   mediaType: "tv" | "movie";
};

export default function GenreCard({ genre, mediaType }: Props) {
   const [isHovered, setIsHovered] = useState(false);

   const onHoverStart = async () => {
      setIsHovered(true);
   };

   const onHoverEnd = () => {
      setIsHovered(false);
   };

   const router = useRouter();
   const handleClick = () => {
      router.push(`/${mediaType}/genres/${genre.id}`);
   };
   const transition = { type: "spring", stiffness: 150, damping: 20, mass: 1 };
   return (
      <motion.div
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         onClick={handleClick}
         className="w-full aspect-[3/2] relative overflow-hidden"
      >
         <motion.div
            animate={{ scale: isHovered ? 1.15 : 1 }}
            transition={transition}
            className="relative w-full h-full"
         >
            <GenreImage alt={genre.name} src={genre.image} />
         </motion.div>
         <motion.div
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-start items-end"
         >
            <span className="text-lg uppercase font-title text-white">
               {genre.name}
            </span>
         </motion.div>
      </motion.div>
   );
}
