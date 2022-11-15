import { useRouter } from "next/router";

type Props = {
   link: string;
   icon: string;
   text: string;
};

export default function SideLink({ link, icon, text }: Props) {
   const router = useRouter();

   const goTo = () => {
      router.push(link);
   };

   return (
      <li className="cursor-pointer h-9 relative group" onClick={goTo}>
         <div className="flex items-center h-full">
            <div className="mx-5 rounded-lg grid place-content-center">
               <span className="material-icons">{icon}</span>
            </div>
            <span className="truncate">{text}</span>
         </div>
         <div
            className={`absolute top-0 h-full bg-blue-500 rounded-r-lg -z-10 ${
               router.pathname === link
                  ? "w-full duration-300"
                  : "w-0 group-hover:w-14 duration-200"
            }`}
         ></div>
      </li>
   );
}
