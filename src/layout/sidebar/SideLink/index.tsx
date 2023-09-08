import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "@/store/slices/sidebar-slice";
import StoreModel from "@/models/StoreModel";
import InnerSideLink from "./InnerSideLink";
import SideActiveMark from "./SideActiveMark";
import useSidebarActiveMark from "@/hooks/useSidebarActiveMark";

import SideLinkContainer from "./SideLinkContainer";
import SidebarDropdown from "./SidebarDropdown";
import SidebarTooltip from "./SidebarTooltip";
import { sideLinkAnimation } from "@/animations/SidebarAnimations";

interface DropdownItem {
   link: string;
   icon: string;
   text: string;
}

type Props = {
   link: string;
   icon: string;
   text: string;
   dropdown?: boolean;
   mediaType?: "movie" | "tv";
   items?: DropdownItem[];
   list?: true;
};

export default function SideLink({
   link,
   icon,
   text,
   dropdown,
   mediaType,
   items,
   list,
}: Props) {
   const dispatch = useDispatch();
   const hideSidebar = () => dispatch(sidebarActions.closeReveal());
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);

   const [showTag, setShowTag] = useState<boolean>(false);
   const [tagPosition, setTagPosition] = useState<any>(null);

   const elementRef = useRef<HTMLDivElement>(null);
   const { isSelected } = useSidebarActiveMark({ mediaType, link });

   const handleHoverStart = () => {
      if (expandSidebar) return;
      const rect = elementRef.current!.getBoundingClientRect();
      setTagPosition({
         top: rect.top,
         bottom: rect.bottom,
         left: rect.left,
         right: rect.right,
      });
      setShowTag(true);
   };

   const handleHoverEnd = () => {
      setShowTag(false);
   };

   return (
      <SideLinkContainer
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
         isSelected={isSelected}
      >
         <SideActiveMark isSelected={isSelected} />

         <motion.div
            variants={list ? undefined : sideLinkAnimation}
            ref={elementRef}
            className="w-full overflow-hidden origin-right"
         >
            {dropdown ? (
               <SidebarDropdown items={items} icon={icon} text={text} />
            ) : (
               <Link href={link} onClick={hideSidebar}>
                  <InnerSideLink icon={icon} text={text} />
               </Link>
            )}
         </motion.div>

         <AnimatePresence>
            {showTag && (
               <SidebarTooltip
                  items={items}
                  text={text}
                  tagPosition={tagPosition}
               />
            )}
         </AnimatePresence>
      </SideLinkContainer>
   );
}
