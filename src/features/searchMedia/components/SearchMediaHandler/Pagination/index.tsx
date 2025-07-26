import GlassContainer from "@/components/GlassContainer";
import React from "react";
import PaginationButton from "./PaginationButton";
import { usePagination } from "@mantine/hooks";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import LayoutPortal from "@/components/LayoutPortal";

type Props = {
   total: number;
};

export default function Pagination({ total }: Props) {
   const router = useRouter();
   const onChange = (page: number) => {
      router.push({ query: { ...router.query, page: page } });
   };

   const { setPage, active, next, previous, range } = usePagination({
      total: total,
      initialPage: 1,
      onChange,
   });

   if (total === 0) return <></>;
   return (
      <LayoutPortal>
         <motion.div
            layout
            className="h-16 absolute bottom-0 left-0 w-full flex items-center justify-center z-40 pointer-events-none"
         >
            <div className="h-16 flex gap-4">
               <GlassContainer className="h-full overflow-hidden">
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
               <GlassContainer className="h-full overflow-hidden">
                  <PaginationButton
                     right
                     onClick={next}
                     disabled={active === total}
                     grayText={active === total}
                  />
               </GlassContainer>
            </div>
         </motion.div>
      </LayoutPortal>
   );
}
