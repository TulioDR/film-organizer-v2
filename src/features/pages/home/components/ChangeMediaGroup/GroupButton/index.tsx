import React, { useState } from "react";
import { motion } from "framer-motion";
import useHomeContext from "../../../context/HomeContext";
import SelectedAnimation from "./SelectedAnimation";
import ButtonBackground from "./ButtonBackground";

type Props = {
   src: string;
   text: string;
   isSelected: boolean;
   onClick: () => void;
};

export default function GroupButton({ src, text, isSelected, onClick }: Props) {
   const [isHovered, setIsHovered] = useState(false);
   const { isAnimating } = useHomeContext();

   return (
      <div className="relative h-full w-48">
         <motion.button
            onClick={isAnimating ? undefined : onClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="rounded-full relative border-2 border-border-light dark:border-border-dark w-full h-full overflow-hidden hover:border-black dark:hover:border-white"
         >
            <ButtonBackground src={src} isHovered={isHovered} />
            <div className="absolute inset-0 flex items-center pl-4 text-sm uppercase font-bold text-white">
               {text}
            </div>
         </motion.button>
         <SelectedAnimation isSelected={isSelected} />
      </div>
   );
}
