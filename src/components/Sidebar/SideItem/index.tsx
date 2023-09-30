import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";

import { sideLinkAnimation } from "@/animations/SidebarAnimations";
import SideTooltip from "./SideTooltip";
import SideLink from "./SideLink";
import SideDropdown from "./SideDropdown";

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
   list?: true;
}

export default function SideItem({
   link,
   icon,
   text,
   dropdown,
   mediaType,
   items,
   list,
}: Props) {
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);

   const [showTooltip, setShowTooltip] = useState<boolean>(false);
   const [tagPosition, setTagPosition] = useState<any>(null);

   const elementRef = useRef<HTMLLIElement>(null);

   const handleHoverStart = () => {
      if (expandSidebar) return;
      const rect = elementRef.current!.getBoundingClientRect();
      setTagPosition({ top: rect.top, right: rect.right });
      setShowTooltip(true);
   };

   const handleHoverEnd = () => {
      setShowTooltip(false);
   };

   return (
      <motion.li
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
         variants={list ? undefined : sideLinkAnimation}
         ref={elementRef}
         className="w-full origin-right cursor-pointer relative list-none select-none"
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
            <SideLink link={link} icon={icon} text={text} isMainLink />
         )}
         <SideTooltip
            open={showTooltip}
            tooltipPosition={tagPosition}
            items={items}
            text={text}
         />
      </motion.li>
   );
}
