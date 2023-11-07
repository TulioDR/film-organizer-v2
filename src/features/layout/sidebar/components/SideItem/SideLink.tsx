import Link from "next/link";
import { useDispatch } from "react-redux";
import { sidebarActions } from "@/store/slices/sidebar-slice";
import useSidebarActiveMark from "@/features/layout/sidebar/hooks/useSidebarActiveMark";
import SideInnerItem from "./SideInnerItem";

type Props = {
   link: string;
   icon: string;
   text: string;
};

export default function SideLink({ link, icon, text }: Props) {
   const dispatch = useDispatch();
   const hideSidebar = () => dispatch(sidebarActions.closeReveal());

   const { isSelected } = useSidebarActiveMark({
      mediaType: undefined,
      link: link,
   });

   return (
      <Link
         href={link}
         onClick={hideSidebar}
         className="relative block overflow-hidden"
      >
         <SideInnerItem isSelected={isSelected} icon={icon} text={text} />
      </Link>
   );
}
