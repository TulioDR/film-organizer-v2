import { motion } from "framer-motion";
import PaginationContent from "./PaginationContent";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
   page?: string | number;
   left?: true;
   right?: true;
   isActive?: boolean;
   disabled?: boolean;
   grayText?: boolean;
};

export default function PaginationButton({
   page,
   left,
   right,
   disabled = false,
   grayText = false,
   isActive = false,
}: Props) {
   const router = useRouter();
   const { pathname, query } = router;
   const newQuery = { ...query, page: page };

   return (
      <Link
         href={{ pathname: pathname, query: newQuery }}
         scroll={false}
         className={`h-full aspect-square select-none relative hover:bg-white text-white hover:text-black 
            ${disabled ? "pointer-events-none" : ""}
            ${grayText ? "text-border" : ""}
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
            <PaginationContent left={left} right={right} page={page} />
         </div>
      </Link>
   );
}
