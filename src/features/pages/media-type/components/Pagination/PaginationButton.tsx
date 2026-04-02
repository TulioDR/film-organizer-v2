import { motion } from "framer-motion";

type Props = {
   isActive?: boolean;
   disabled?: boolean;
   navigation?: true;
   icon?: string;
   text?: string;
   onClick: () => void;
};

export default function PaginationButton({
   disabled,
   isActive,
   navigation,
   icon,
   text,
   onClick,
}: Props) {
   return (
      <button
         onClick={onClick}
         className={`h-full block select-none relative hover:bg-black dark:hover:bg-white 
            ${
               disabled
                  ? "pointer-events-none text-black/50 dark:text-white/50"
                  : "text-black dark:text-white"
            }
            ${isActive ? "" : "dark:hover:text-black hover:text-white"}
            ${navigation ? "aspect-[2/3] xl:aspect-square" : "aspect-square"}
         `}
      >
         {isActive && (
            <motion.div
               layoutId="active-pagination"
               className="absolute top-0 left-0 w-full h-full p-1 xl:p-2"
               transition={{ duration: 0.6, type: "spring" }}
            >
               <div className="rounded-md w-full h-full bg-accent" />
            </motion.div>
         )}
         <div className="relative h-full w-full flex items-center justify-center">
            {icon && <span className="material-symbols-outlined">{icon}</span>}
            {text && <span className="text-lg font-black">{text}</span>}
         </div>
      </button>
   );
}
