import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { popUpAnimation } from "@/animations/PopUpAnimation";

type Props = {
   onClick: () => void;
};

export default function ToggleSidebar({ onClick }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   return (
      <motion.button
         variants={popUpAnimation}
         style={{ backgroundColor: themeColor }}
         onClick={onClick}
         className="h-9 aspect-square flex-shrink-0 rounded-lg grid place-content-center text-white"
      >
         <span className="material-icons">menu</span>
      </motion.button>
   );
}
