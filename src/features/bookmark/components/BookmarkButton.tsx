import LoadingSpinner from "@/common/components/LoadingSpinner";
import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
   isLoading: boolean;
   isMediaSaved: boolean;
};

export default function BookmarkButton({
   onClick,
   isLoading,
   isMediaSaved,
}: Props) {
   return (
      <motion.button
         onMouseDown={(e: any) => e.stopPropagation()}
         onClick={onClick}
         style={{ borderRadius: STANDARD_RADIUS }}
         className={`aspect-square h-full p-px border flex items-center justify-center
            border-border-light dark:border-border-dark
            bg-white dark:bg-black text-black dark:text-white
            hover:border-black dark:hover:border-white 
            active:border-black dark:active:border-white
            ${isLoading ? "pointer-events-none" : ""}
         `}
      >
         {isLoading ? (
            <div className="w-3/4">
               <LoadingSpinner />
            </div>
         ) : (
            <span
               style={{
                  fontVariationSettings: isMediaSaved ? `"FILL" 1` : undefined,
               }}
               className="material-symbols-outlined"
            >
               bookmark
            </span>
         )}
      </motion.button>
   );
}
