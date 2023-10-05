import { sidebarActions } from "@/store/slices/sidebar-slice";
import Link from "next/link";
import { useDispatch } from "react-redux";
import SideItemIcon from "../SideInnerItem/SideItemIcon";
import useSidebarActiveMark from "@/hooks/useSidebarActiveMark";

type Props = {
   link: string;
   icon: string;
   text: string;
   hideIcon?: true;
   isDropdownSelected: boolean;
};

export default function SideDropdownItem({
   link,
   icon,
   text,
   hideIcon,
   isDropdownSelected,
}: Props) {
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
         className={`flex items-center h-9 hover:text-light-1 dark:hover:text-dark-1 ${
            hideIcon ? "pl-5" : ""
         } ${
            isDropdownSelected
               ? isSelected
                  ? "text-light-1 bg-primary-light dark:text-dark-1 dark:bg-primary-dark"
                  : "text-dark-2 hover:bg-secondary-light dark:text-light-2 dark:hover:bg-secondary-dark"
               : "text-light-2 hover:bg-primary-light dark:text-dark-2 dark:hover:bg-primary-dark"
         }`}
      >
         {!hideIcon && (
            <SideItemIcon isFilled={isSelected} icon={icon} smallIcon />
         )}
         <span className="text-sm">{text}</span>
      </Link>
   );
}
