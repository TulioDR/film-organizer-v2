import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
   page: string | number;
   isActive: boolean;
   disabled: boolean;
};

export default function PaginationButton({ page, disabled, isActive }: Props) {
   const router = useRouter();
   const { pathname, query } = router;
   const newQuery = { ...query, page: page };

   return (
      <Link
         href={{ pathname: pathname, query: newQuery }}
         scroll={false}
         className={`h-full aspect-square block select-none relative text-white md:hover:bg-white  
            ${disabled ? "pointer-events-none" : ""}
            ${isActive ? "" : "md:hover:text-black"}
         `}
      >
         {isActive && (
            <motion.div
               layoutId="active-pagination"
               className="absolute top-0 left-0 w-full h-full p-2"
               transition={{ duration: 0.6, type: "spring" }}
            >
               <div className="rounded-md w-full h-full bg-blue-500" />
            </motion.div>
         )}
         <div className="relative h-full w-full flex items-center justify-center">
            <div className="text-lg font-black">{page}</div>
         </div>
      </Link>
   );
}
