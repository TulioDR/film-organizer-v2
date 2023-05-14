import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useThemeContext from "../../context/ThemeContext";

type Props = {
   link: string;
   icon: string;
   text: string;
};

export default function SideLink({ link, icon, text }: Props) {
   const { themeColor } = useThemeContext();
   const router = useRouter();

   const [isSelected, setIsSelected] = useState<boolean>(false);
   useEffect(() => {
      if (router.asPath === link) setIsSelected(true);
      else setIsSelected(false);
   }, [router.asPath, link]);

   return (
      <li
         className={`cursor-pointer relative group list-none flex justify-items-stretch ${
            isSelected
               ? ""
               : "text-light-text-soft dark:text-dark-text-normal hover:text-light-text-hard dark:hover:text-dark-text-hard duration-100"
         }`}
      >
         <div className="w-10">
            {isSelected && (
               <div
                  style={{ backgroundColor: themeColor }}
                  className="w-1 h-full"
               ></div>
            )}
         </div>
         <Link href={link} className="flex items-center h-full space-x-5">
            <span className="material-icons">{icon}</span>
            <span className="truncate">{text}</span>
         </Link>
      </li>
   );
}
