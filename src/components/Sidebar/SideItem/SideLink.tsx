import Link from "next/link";
import SideActiveMark from "./SideActiveMark";
import SideInnerItem from "./SideInnerItem";
import { useDispatch } from "react-redux";
import { sidebarActions } from "@/store/slices/sidebar-slice";
import useSidebarActiveMark from "@/hooks/useSidebarActiveMark";

type Props = {
   link: string;
   icon: string;
   text: string;
   hideIcon?: true;
   isMainLink?: true;
   mediaType?: "movie" | "tv";
};

export default function SideLink({
   link,
   icon,
   text,
   hideIcon,
   isMainLink,
   mediaType,
}: Props) {
   const dispatch = useDispatch();
   const hideSidebar = () => dispatch(sidebarActions.closeReveal());

   const { isSelected } = useSidebarActiveMark({
      mediaType: mediaType,
      link: link,
   });

   return (
      <Link href={link} onClick={hideSidebar} className="relative block">
         <SideActiveMark isMainMark={isMainLink} isSelected={isSelected} />
         <SideInnerItem
            icon={icon}
            text={text}
            isSelected={isSelected}
            hideIcon={hideIcon}
            isMainLink={isMainLink}
         />
      </Link>
   );
}
