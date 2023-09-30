import StoreModel from "@/models/StoreModel";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

type Props = {
   isMainMark?: true;
   isSelected: boolean;
};

export default function SideActiveMark({ isSelected, isMainMark }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   if (!isSelected) return <></>;
   return (
      <motion.div
         style={{ backgroundColor: themeColor }}
         className={`absolute w-1 h-full rounded-r-full ${
            isMainMark ? "-left-10" : "-left-5"
         }`}
         layoutId={isMainMark ? "underline" : "underline-item"}
      />
   );
}
