import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
   page: string | number;
   isActive?: boolean;
   disabled?: boolean;
   navigation?: true;
   icon?: string;
   text?: string;
};

export default function PaginationButton({
   page,
   disabled,
   isActive,
   navigation,
   icon,
   text,
}: Props) {
   const router = useRouter();
   const { pathname, query } = router;
   const newQuery = { ...query, page: page };

   return (
      <Link
         href={{ pathname: pathname, query: newQuery }}
         scroll={false}
         className={`h-full block select-none relative hover:bg-black dark:hover:bg-white  
            ${
               disabled
                  ? "pointer-events-none text-black/50 dark:text-white/50"
                  : "text-black dark:text-white"
            }
            ${isActive ? "" : "dark:hover:text-black hover:text-white"}
            ${navigation ? "w-12 " : "aspect-square"}
         `}
      >
         {isActive && (
            <motion.div
               layoutId="active-pagination"
               className="absolute top-0 left-0 w-full h-full p-2"
               transition={{ duration: 0.6, type: "spring" }}
            >
               <div className="rounded-md w-full h-full bg-accent" />
            </motion.div>
         )}
         <div className="relative h-full w-full flex items-center justify-center">
            {icon && <span className="material-symbols-outlined">{icon}</span>}
            {text && <span className="text-lg font-black">{text}</span>}
         </div>
      </Link>
   );
}
