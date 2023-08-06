import Link from "next/link";
import SideActiveMark from "../SideActiveMark";
import useSidebarActiveMark from "@/hooks/useSidebarActiveMark";

type Props = {
   item: {
      link: string;
      icon: string;
      text: string;
   };
   isTooltip?: true;
};

export default function SideDdItem({ item, isTooltip }: Props) {
   const { isSelected } = useSidebarActiveMark({
      mediaType: undefined,
      link: item.link,
   });

   return (
      <Link
         href={item.link}
         className="flex items-center gap-2 text-text-2 hover:text-white relative h-6"
      >
         <SideActiveMark item isSelected={isSelected} />
         {!isTooltip && (
            <span className="material-icons !text-xl">{item.icon}</span>
         )}
         <span className="text-sm">{item.text}</span>
      </Link>
   );
}
