import { sidebarActions } from "@/store/slices/sidebar-slice";
import Link from "next/link";
import { useDispatch } from "react-redux";
import useSidebarActiveMark from "@/features/layout/sidebar/hooks/useSidebarActiveMark";
import SideItemIcon from "../SideItemIcon";

type Props = {
   link: string;
   icon: string;
   text: string;
};

export default function TooltipItem({ link, icon, text }: Props) {
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
         className={`h-12 px-2 text-black hover:bg-black hover:text-white flex items-center gap-2 rounded-md`}
      >
         <SideItemIcon isFilled={isSelected} icon={icon} smallIcon />
         <span className="text-sm">{text}</span>
      </Link>
   );
}
