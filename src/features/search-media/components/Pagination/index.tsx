import React from "react";
import PaginationButton from "./PaginationButton";
import { usePagination } from "@mantine/hooks";
import { motion } from "framer-motion";
import GlassContainer from "@/common/components/GlassContainer";
import FixedUIPortal from "@/features/layout/main-layout/components/FixedUIPortal";

type Props = {
   total: number;
   currentPage: number;
};

export default function Pagination({ total, currentPage }: Props) {
   const { range } = usePagination({
      total: total,
      initialPage: currentPage,
      page: currentPage,
   });

   return (
      <FixedUIPortal>
         <motion.div className="h-16 absolute bottom-0 left-0 w-full z-20 pointer-events-none overflow-hidden">
            <motion.div
               initial={{ y: "100%" }}
               animate={{ y: "0%" }}
               exit={{ y: "-100%" }}
               transition={{ duration: 0.4, ease: "easeInOut" }}
               className="h-16 flex gap-4 justify-center w-full"
            >
               <GlassContainer className="h-full overflow-hidden aspect-square">
                  <PaginationButton
                     left
                     disabled={currentPage === 1}
                     grayText={currentPage === 1}
                  />
               </GlassContainer>
               <GlassContainer className="h-full flex px-4">
                  {range.map((value, index) => (
                     <PaginationButton
                        key={index + "-" + value}
                        page={value === "dots" ? "..." : value}
                        isActive={currentPage === value}
                        disabled={value === "dots"}
                     />
                  ))}
               </GlassContainer>
               <GlassContainer className="h-full overflow-hidden aspect-square">
                  <PaginationButton
                     right
                     disabled={currentPage === total}
                     grayText={currentPage === total}
                  />
               </GlassContainer>
            </motion.div>
         </motion.div>
      </FixedUIPortal>
   );
}
