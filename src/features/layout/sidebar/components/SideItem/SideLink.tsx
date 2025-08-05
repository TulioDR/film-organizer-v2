import Link from "next/link";

type Props = {
   link: string;
   icon: string;
   children: React.ReactNode;
   hasItems: boolean;
   isHovered: boolean;
   isSelected: boolean;
};

export default function SideLink({
   link,
   icon,
   children,
   hasItems,
   isHovered,
   isSelected,
}: Props) {
   return (
      <Link
         href={link}
         scroll={false}
         className={`w-full h-full py-2 pl-2 block relative group text-white
               ${hasItems && isHovered ? "text-black hover:text-white" : ""}
               ${hasItems ? "" : "hover:text-black"} 
               ${isHovered ? "bg-white" : ""}
            `}
      >
         <div
            className={`rounded-l-md h-full w-full flex items-center justify-center pr-2 
                  ${hasItems ? "group-hover:bg-black " : ""}
                  ${isSelected ? "text-white" : ""}
               `}
         >
            <span className="material-symbols-outlined z-10">{icon}</span>
         </div>
         {children}
      </Link>
   );
}
