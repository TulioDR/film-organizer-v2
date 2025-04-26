import GlassContainer from "@/components/GlassContainer";
import React from "react";
import PaginationButton from "./PaginationButton";
import { usePagination } from "@mantine/hooks";
import { useRouter } from "next/router";
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
      <div className="w-32 fixed top-0 right-0 h-[100svh] flex items-end justify-center pb-8">
         <GlassContainer className="w-16 flex flex-col py-4">
            <PaginationButton
               top
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
               bottom
               onClick={next}
               disabled={active === total}
               grayText={active === total}
            />
         </GlassContainer>
      </div>
   );
}
