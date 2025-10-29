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
         scroll={false}
         className="h-12 pl-4 hover:bg-black flex items-center gap-2"
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
            <SidebarIcon icon={icon} dropdown isSelected={isSelected} />
         </div>
         <span className="text-sm mix-blend-difference">{text}</span>
      </Link>
   );
}
