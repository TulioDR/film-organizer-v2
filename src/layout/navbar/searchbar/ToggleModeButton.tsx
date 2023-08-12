import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { popUpAnimation } from "@/animations/PopUpAnimation";

type Props = {
   isMovie: boolean;
   onClick: () => void;
   showResults: boolean;
};

export default function ToggleModeButton({
   isMovie,
   onClick,
   showResults,
}: Props) {
   const { themeColor } = useSelector((state: any) => state.theme);

   return (
      <motion.button
         variants={popUpAnimation}
         onMouseDown={(e) => e.preventDefault()}
         type="button"
         onClick={onClick}
         className={`h-full px-2 flex items-center gap-1 relative group rounded-lg -mr-5 z-10`}
         style={{ backgroundColor: themeColor, y: -8 }}
      >
         <div className="overflow-hidden relative">
            <div
               className={`flex items-center h-full duration-300 ${
                  isMovie ? "" : "-translate-x-full"
               }`}
            >
               <span className="material-icons">movie</span>
               <span className="material-icons absolute left-full">
                  smart_display
               </span>
            </div>
         </div>
         <div className="hidden absolute md:group-hover:flex items-center left-0 top-full translate-y-2">
            <div
               className="h-2 w-2 rotate-45"
               style={{ backgroundColor: themeColor }}
            ></div>
            <div
               className="rounded-md text-xs py-1 px-2 w-max -translate-x-1"
               style={{ backgroundColor: themeColor }}
            >
               What are you looking for?
            </div>
         </div>
      </motion.button>
   );
}
