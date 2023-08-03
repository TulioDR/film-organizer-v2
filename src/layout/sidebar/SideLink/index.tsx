import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DropdownItems from "./DropdownItems";
import SelectedMark from "./SelectedMark";
import DropdownIcon from "./DropdownIcon";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "@/store/slices/sidebar-slice";
import StoreModel from "@/models/StoreModel";
import InnerSideLink from "./InnerSideLink";
import SideTag from "./SideTag";

type Props = {
   link: string;
   icon: string;
   text: string;
   dropdown?: boolean;
   children?: React.ReactNode;
   item?: boolean;
   mediaType?: "movie" | "tv";
};

export default function SideLink({
   link,
   icon,
   text,
   dropdown,
   children,
   item,
   mediaType,
}: Props) {
   const dispatch = useDispatch();
   const hideSidebar = () => dispatch(sidebarActions.closeReveal());
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);

   const { asPath, query } = useRouter();

   const [isSelected, setIsSelected] = useState<boolean>(false);
   useEffect(() => {
      if (mediaType) {
         if (query.mediaType === mediaType) setIsSelected(true);
         else setIsSelected(false);
         return;
      }
      if (asPath === link) setIsSelected(true);
      else setIsSelected(false);
   }, [asPath, link, mediaType, query.mediaType]);

   const [open, setOpen] = useState<boolean>(false);
   const toggle = () => setOpen((prev) => !prev);

   const [showTag, setShowTag] = useState<boolean>(false);
   const [tagPosition, setTagPosition] = useState<any>(null);

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

   const elementRef = useRef<HTMLDivElement>(null);
   return (
      <motion.li
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
         className={`cursor-pointer w-full relative flex list-none select-none font-light ${
            isSelected
               ? "text-white"
               : "text-text-2 hover:text-white duration-100"
         }`}
      >
         <SelectedMark item={item} isSelected={isSelected} />
         <motion.div ref={elementRef} className="w-full overflow-hidden">
            {dropdown ? (
               <button
                  onClick={toggle}
                  className="flex items-center justify-between w-full "
               >
                  <InnerSideLink icon={icon} text={text} />
                  <DropdownIcon open={open} />
               </button>
            ) : (
               <Link href={link} onClick={hideSidebar}>
                  <InnerSideLink icon={icon} text={text} />
               </Link>
            )}
            <AnimatePresence>
               {open && expandSidebar && (
                  <DropdownItems>{children}</DropdownItems>
               )}
            </AnimatePresence>
         </motion.div>
         <AnimatePresence>
            {showTag && <SideTag text={text} tagPosition={tagPosition} />}
         </AnimatePresence>
      </motion.li>
   );
}
