import Link from "next/link";
import useActiveMark from "../../../hooks/useActiveMark";
import ActiveMark from "../ActiveMark";
import MainTooltip from "./MainTooltip";
import SidebarIcon from "../SidebarIcon";

type Props = {
   link: string;
   icon: string;
   hasItems: boolean;
   isHovered: boolean;
   mediaType?: "movie" | "tv";
   text: string;
};

export default function MainLink({
   link,
   icon,
   hasItems,
   isHovered,
   mediaType,
   text,
}: Props) {
   const { isSelected } = useActiveMark(link, mediaType);

   return (
      <Link
         href={link}
         scroll={false}
         className={`w-full h-full py-2 pl-2 block relative group text-white
               ${hasItems && isHovered ? "text-black hover:text-white" : ""}
               ${hasItems ? "" : "hover:text-black"} 
               ${isHovered ? "bg-white" : ""}
            `}
      >
         <div
            className={`rounded-l-md h-full w-full flex items-center relative justify-center pr-2 
               ${hasItems ? "group-hover:bg-black " : ""}
               ${isSelected ? "text-white" : ""}
            `}
         >
            {isSelected && <ActiveMark layoutId="main-active-mark" />}
            <SidebarIcon icon={icon} />
         </div>
         {isHovered && <MainTooltip hasItems={!!hasItems} text={text} />}
      </Link>
   );
}
