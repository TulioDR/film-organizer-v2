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
         className="h-full w-full flex relative items-center justify-center"
      >
         <SidebarIcon icon={icon} isSelected={isSelected} />
         {isHovered && <MainTooltip hasItems={!!hasItems} text={text} />}
         <div className="absolute top-0 left-0 w-full h-full pointer-events-none p-2 ">
            {isSelected && <ActiveMark layoutId="main-active-mark" />}
         </div>
      </Link>
   );
}
