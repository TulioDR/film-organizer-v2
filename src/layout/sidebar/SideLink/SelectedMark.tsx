import { motion } from "framer-motion";
import useSidebarContext from "@/context/SidebarContext";
import { useSelector } from "react-redux";

type Props = { item?: boolean; isSelected: boolean };

export default function SelectedMark({ isSelected, item }: Props) {
   const { themeColor } = useSelector((state: any) => state.theme);

   const { openSidebar } = useSidebarContext();
   return (
      <div
         className={`flex-shrink-0 ${
            item ? `${openSidebar ? "w-5" : "w-0"} duration-300` : "w-10 "
         }`}
      >
         {isSelected && (
            <motion.div
               style={{ backgroundColor: themeColor }}
               className="w-1 h-full"
               layoutId={item ? "underline-item" : "underline"}
            />
         )}
      </div>
   );
}
