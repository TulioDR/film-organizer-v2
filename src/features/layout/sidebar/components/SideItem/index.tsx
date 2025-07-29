import { useRef, useState } from "react";
import { motion } from "framer-motion";

import useSidebarActiveMark from "@/features/layout/sidebar/hooks/useSidebarActiveMark";
import { sideLinkAnimation } from "@/animations/SidebarAnimations";
import ActiveMark from "./ActiveMark";
import SideLink from "./SideLink";
import MainTooltip from "./Tooltips/MainTooltip";
import TooltipItem from "./Tooltips/TooltipItem";
import DropdownItemModel from "../../models/DropdownItemModel";

interface Props {
   link: string;
   icon: string;
   text: string;
   mediaType?: "movie" | "tv";
   items?: DropdownItemModel[];
}

export default function SideItem({
   link,
   icon,
   text,
   mediaType,
   items,
}: Props) {
   const elementRef = useRef<HTMLLIElement>(null);
   const { isSelected } = useSidebarActiveMark({ mediaType, link });

   const [isHovered, setIsHovered] = useState<boolean>(false);
   const handleHoverStart = () => setIsHovered(true);
   const handleHoverEnd = () => setIsHovered(false);

   return (
      <motion.li
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
         variants={sideLinkAnimation}
         ref={elementRef}
         className="h-16 w-full list-none select-none relative"
      >
         {isSelected && <ActiveMark />}
         <SideLink
            link={link}
            icon={icon}
            hasItems={!!items}
            isHovered={isHovered}
         >
            {isHovered && <MainTooltip hasItems={!!items} text={text} />}
         </SideLink>
         {isHovered && items && (
            <div className="pb-4 px-2 bg-white absolute top-full left-full w-40 rounded-br-md">
               {items.map((item, index) => (
                  <TooltipItem
                     key={index}
                     link={item.link}
                     icon={item.icon}
                     text={item.text}
                  />
               ))}
            </div>
         )}
      </motion.li>
   );
}
