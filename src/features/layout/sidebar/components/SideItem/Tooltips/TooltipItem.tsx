import { sidebarActions } from "@/store/slices/sidebar-slice";
import Link from "next/link";
import { useDispatch } from "react-redux";
import SideItemIcon from "../SideItemIcon";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Props = {
   link: string;
   icon: string;
   text: string;
   isSelectedMainSelected: boolean;
};

export default function TooltipItem({
   link,
   icon,
   text,
   isSelectedMainSelected,
}: Props) {
   const router = useRouter();
   const dispatch = useDispatch();
   const hideSidebar = () => dispatch(sidebarActions.closeReveal());
   const [isSelected, setIsSelected] = useState<boolean>(false);

   useEffect(() => {
      const url = new URL(router.asPath, window.location.origin);
      const pathWithoutQueries = url.pathname;
      setIsSelected(pathWithoutQueries === link);
   }, [router.asPath, link]);

   return (
      <Link
         href={link}
         onClick={hideSidebar}
         className={`h-12 p-1.5 text-black hover:bg-black hover:text-white flex items-center gap-2 rounded-md`}
      >
         <SideItemIcon
            isFilled={isSelected}
            icon={icon}
            isSelectedMainSelected={isSelectedMainSelected}
         />
         <span className="text-sm">{text}</span>
      </Link>
   );
}
