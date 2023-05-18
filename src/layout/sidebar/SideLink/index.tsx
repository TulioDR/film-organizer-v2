import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import DropdownItems from "./DropdownItems";
import SelectedMark from "./SelectedMark";
import DropdownIcon from "./DropdownIcon";

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
   const { asPath, query } = useRouter();

   const [isSelected, setIsSelected] = useState<boolean>(false);
   useEffect(() => {
      if (mediaType) {
         console.log;
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
               ? ""
               : "text-light-text-soft dark:text-dark-text-normal hover:text-light-text-hard dark:hover:text-dark-text-hard duration-100"
         }`}
      >
         <SelectedMark item={item} isSelected={isSelected} />
         <div className="flex-1">
            <div
               onClick={dropdown ? toggle : undefined}
               className="flex w-full justify-between items-center"
            >
               <Link
                  href={link}
                  className={`flex items-center gap-5 w-full ${
                     dropdown ? "pointer-events-none" : ""
                  }`}
               >
                  <span className="material-icons">{icon}</span>
                  <span className="truncate">{text}</span>
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
