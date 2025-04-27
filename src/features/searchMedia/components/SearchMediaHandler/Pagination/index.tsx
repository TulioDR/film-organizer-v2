import GlassContainer from "@/components/GlassContainer";
import React from "react";
import PaginationButton from "./PaginationButton";
import { usePagination } from "@mantine/hooks";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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

   return (
      <motion.div
         layoutRoot
         className="h-32 fixed bottom-0 left-0 w-screen flex items-center justify-center z-40"
      >
         <GlassContainer className="h-16 flex px-4">
            <PaginationButton
               left
               onClick={previous}
               disabled={active === 1}
               grayText={active === 1}
            />
            {range.map((value, index) => (
               <PaginationButton
                  key={index}
                  onClick={value === "dots" ? undefined : () => setPage(value)}
                  page={value === "dots" ? "..." : value}
                  isActive={active === value}
                  disabled={value === "dots"}
               />
            ))}
            <PaginationButton
               right
               onClick={next}
               disabled={active === total}
               grayText={active === total}
            />
         </GlassContainer>
      </motion.div>
   );
}
