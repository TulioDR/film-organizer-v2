import Link from "next/link";
import useActiveMark from "../../../../hooks/useActiveMark";
import { AnimatePresence } from "framer-motion";
import ActiveMark from "../../ActiveMark";
import ActiveMarkContainer from "./ActiveMarkContainer";
import SidebarIcon from "../../SidebarIcon";

type Props = {
   link: string;
   icon: string;
   text: string;
   isMainSelected: boolean;
};

export default function DropdownItem({
   link,
   icon,
   text,
   isMainSelected,
}: Props) {
   const { isSelected } = useActiveMark(link);

   return (
      <Link
         href={link}
         className="h-12 p-1.5 text-black hover:bg-black hover:text-white flex items-center gap-2 rounded-md"
      >
         <div
            className={`h-full flex items-center justify-center aspect-square relative
               ${isSelected ? "text-white" : ""}   
            `}
         >
            <AnimatePresence>
               {isMainSelected && (
                  <ActiveMarkContainer>
                     {isSelected && (
                        <ActiveMark layoutId="dropdown-active-mark" />
                     )}
                  </ActiveMarkContainer>
               )}
            </AnimatePresence>
            <SidebarIcon icon={icon} dropdown />
         </div>
         <span className="text-sm">{text}</span>
      </Link>
   );
}
