import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import DropdownItems from "./DropdownItems";
import SelectedMark from "./SelectedMark";
import DropdownIcon from "./DropdownIcon";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "@/store/slices/sidebar-slice";

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
   const { expandSidebar } = useSelector((state: any) => state.sidebar);

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

   return (
      <li
         className={`cursor-pointer relative flex list-none select-none ${
            isSelected
               ? "text-text-1"
               : "text-text-2 hover:text-text-1 duration-100"
         }`}
      >
         <SelectedMark item={item} isSelected={isSelected} />
         <div className="flex-1">
            <div
               onClick={dropdown ? toggle : hideSidebar}
               className="flex w-full justify-between items-center"
            >
               <Link
                  href={link}
                  className={`flex items-center gap-5 w-full ${
                     dropdown ? "pointer-events-none" : ""
                  }`}
               >
                  <span className="material-icons !w-9 !text-center !flex-shrink-0">
                     {icon}
                  </span>
                  {expandSidebar && (
                     <span className="flex-shrink-0">{text}</span>
                  )}
               </Link>
               {dropdown && <DropdownIcon open={open} />}
            </div>
            <AnimatePresence>
               {open && <DropdownItems>{children}</DropdownItems>}
            </AnimatePresence>
         </div>
      </li>
   );
}
