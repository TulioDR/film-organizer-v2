import SideDropdownItem from "../SideDropdown/SideDropdownItem";
import Link from "next/link";

type Props = {
   items?: any[];
   text: string;

   link: string;
};

export default function SideTooltip({ items, text, link }: Props) {
   return (
      <div
         className={`w-40 absolute left-full top-0 rounded-r-md bg-white 
               ${items ? "pb-4" : ""}
            `}
      >
         {items ? (
            <div className="text-base h-16 flex items-center pl-4 w-full text-black">
               {text}
            </div>
         ) : (
            <Link
               href={link}
               className="text-base h-16 flex items-center pl-4 w-full text-black"
            >
               {text}
            </Link>
         )}

         {items?.map((item, index) => (
            <SideDropdownItem
               key={index}
               link={item.link}
               icon={item.icon}
               text={item.text}
            />
         ))}
      </div>
   );
}
