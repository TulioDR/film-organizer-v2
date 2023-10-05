import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";

import SideTooltip from "./SideTooltip";
import SideLink from "./SideLink";
import SideDropdown from "./SideDropdown";
import useSidebarActiveMark from "@/hooks/useSidebarActiveMark";
import { sideLinkAnimation } from "@/animations/SidebarAnimations";

interface DropdownItem {
   link: string;
   icon: string;
   text: string;
}

interface Props {
   link: string;
   icon: string;
   text: string;
   dropdown?: true;
   mediaType?: "movie" | "tv";
   items?: DropdownItem[];
}

export default function SideItem({
   link,
   icon,
   text,
   dropdown,
   mediaType,
   items,
}: Props) {
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);

   const [showTooltip, setShowTooltip] = useState<boolean>(false);
   const [isHovering, setIsHovering] = useState<boolean>(false);
   const [tagPosition, setTagPosition] = useState<any>(null);

   const elementRef = useRef<HTMLLIElement>(null);

   const handleHoverStart = () => {
      setIsHovering(true);
      if (expandSidebar) return;
      const rect = elementRef.current!.getBoundingClientRect();
      setTagPosition({ top: rect.top, right: rect.right });
      setShowTooltip(true);
   };

   const handleHoverEnd = () => {
      setIsHovering(false);
      setShowTooltip(false);
   };

   const { isSelected } = useSidebarActiveMark({ mediaType, link });

   return (
      <motion.li
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
         variants={sideLinkAnimation}
         ref={elementRef}
         className={`w-full origin-right list-none select-none rounded-l-lg 
         ${showTooltip ? "" : "rounded-r-lg"}
         ${
            isSelected
               ? "bg-light-1 text-dark-1 dark:bg-dark-1 dark:text-light-1"
               : isHovering
               ? "text-light-1 bg-secondary-light dark:text-dark-1 dark:bg-secondary-dark"
               : "text-light-2 dark:text-dark-2"
         }`}
      >
         {dropdown ? (
            <SideDropdown
               link={link}
               icon={icon}
               text={text}
               mediaType={mediaType!}
               items={items!}
            />
         ) : (
            <SideLink link={link} icon={icon} text={text} />
         )}
         <SideTooltip
            isSelected={isSelected}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            open={showTooltip}
            tooltipPosition={tagPosition}
            items={items}
            text={text}
            link={link}
         />
      </motion.li>
   );
}
