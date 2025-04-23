import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";

import SideTooltip from "./SideTooltip";
import useSidebarActiveMark from "@/features/layout/sidebar/hooks/useSidebarActiveMark";
import { sideLinkAnimation } from "@/animations/SidebarAnimations";
import Link from "next/link";

interface DropdownItem {
   link: string;
   icon: string;
   text: string;
}

interface Props {
   link?: string;
   icon: string;
   text: string;
   mediaType?: "movie" | "tv";
   items?: DropdownItem[];
}

export default function SideItem({
   link = "#",
   icon,
   text,
   mediaType,
   items,
}: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   const [showTooltip, setShowTooltip] = useState<boolean>(false);

   const elementRef = useRef<HTMLLIElement>(null);

   const handleHoverStart = () => {
      setShowTooltip(true);
   };

   const handleHoverEnd = () => {
      setShowTooltip(false);
   };

   const { isSelected } = useSidebarActiveMark({ mediaType, link });

   return (
      <motion.li
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
         variants={sideLinkAnimation}
         ref={elementRef}
         className={`h-16 aspect-square list-none select-none relative hover:bg-white
            ${isSelected ? " text-white" : "hover:text-black"}
         `}
      >
         {isSelected && (
            <motion.div
               layoutId="activeMark"
               className="absolute top-0 left-0 w-full h-full p-2"
               transition={{ duration: 0.6, type: "spring" }}
            >
               <div
                  style={{ backgroundColor: themeColor }}
                  className="rounded-md w-full h-full"
               />
            </motion.div>
         )}
         {items ? (
            <div className="w-full h-full flex items-center justify-center relative">
               <span className="material-symbols-outlined">{icon}</span>
            </div>
         ) : (
            <Link
               href={link}
               scroll={false}
               className="w-full h-full flex items-center justify-center relative"
            >
               <span className="material-symbols-outlined">{icon}</span>
            </Link>
         )}
         {showTooltip && <SideTooltip items={items} text={text} link={link} />}
      </motion.li>
   );
}
