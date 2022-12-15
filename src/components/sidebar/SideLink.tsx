import { useRouter } from "next/router";
import useThemeContext from "../../context/ThemeContext";

type Props = {
   link: string;
   icon: string;
   text: string;
};

export default function SideLink({ link, icon, text }: Props) {
   const { themeColor } = useThemeContext();

   const router = useRouter();

   const goTo = () => {
      router.push(link);
   };

   return (
      <li
         className={`cursor-pointer h-9 relative group ${
            router.asPath === link
               ? ""
               : "text-light-text-soft dark:text-dark-text-soft hover:text-light-text-hard dark:hover:text-dark-text-hard duration-100"
         }`}
         onClick={goTo}
      >
         <div className="flex items-center h-full">
            <div className="ml-5 mr-3 rounded-lg h-9 w-9 grid place-content-center flex-shrink-0">
               <span className="material-icons">{icon}</span>
            </div>
            <span className="truncate">{text}</span>
         </div>
         <div
            style={{ backgroundColor: themeColor }}
            className={`absolute top-0 h-full rounded-r-lg -z-10 ${
               router.asPath === link
                  ? "w-full duration-300"
                  : "w-0 group-hover:w-14 duration-200"
            }`}
         ></div>
      </li>
   );
}
