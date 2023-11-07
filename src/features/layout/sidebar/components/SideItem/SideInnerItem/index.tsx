import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import SideItemIcon from "./SideItemIcon";

type Props = {
   isSelected: boolean;
   icon: string;
   text: string;
};

export default function SideInnerItem({ isSelected, icon, text }: Props) {
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);
   return (
      <div className="flex items-center gap-2 h-10">
         <SideItemIcon isFilled={isSelected} icon={icon} />
         <span
            className={`flex-shrink-0 duration-300 text-base ${
               expandSidebar ? "opacity-100" : "opacity-0"
            }`}
         >
            {text}
         </span>
      </div>
   );
}
