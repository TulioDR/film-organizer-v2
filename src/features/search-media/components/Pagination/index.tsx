import React from "react";
import PaginationButton from "./PaginationButton";
import { usePagination } from "@mantine/hooks";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import GlassContainer from "@/common/components/GlassContainer";
import FixedUIPortal from "@/features/layout/main-layout/components/FixedUIPortal";

type Props = {
   total: number;
   currentPage: number;
};

export default function Pagination({ total, currentPage }: Props) {
   const router = useRouter();
   // const onChange = (page: number) => {
   //    router.push({ query: { ...router.query, page: page } }, undefined, {
   //       scroll: false,
   //    });
   // };

   const { setPage, active, next, previous, range } = usePagination({
      total: total,
      initialPage: currentPage,
   });

   return (
      <FixedUIPortal>
         <motion.div
            layout
            className="h-16 absolute bottom-0 left-0 w-full flex gap-4 justify-center z-40 pointer-events-none"
         >
            <GlassContainer className="h-full overflow-hidden aspect-square">
               <PaginationButton
                  left
                  onClick={previous}
                  disabled={active === 1}
                  grayText={active === 1}
               />
            </GlassContainer>
            <GlassContainer className="h-full flex px-4">
               {range.map((value, index) => (
                  <PaginationButton
                     key={index}
                     onClick={
                        value === "dots" ? undefined : () => setPage(value)
                     }
                     page={value === "dots" ? "..." : value}
                     isActive={active === value}
                     disabled={value === "dots"}
                  />
               ))}
            </GlassContainer>
            <GlassContainer className="h-full overflow-hidden aspect-square">
               <PaginationButton
                  right
                  onClick={next}
                  disabled={active === total}
                  grayText={active === total}
               />
            </GlassContainer>
         </motion.div>
      </FixedUIPortal>
   );
}
