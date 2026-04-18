import { usePagination } from "@mantine/hooks";
import { Fragment, useEffect } from "react";
import PaginationButton from "./PaginationButton";

type Props = {
   total: number;
   value: number;
   onChange: (page: number) => void;
};

export default function InnerCustomPagination({
   total,
   onChange,
   value: currentValue,
}: Props) {
   const { range } = usePagination({
      total: total,
      page: currentValue,
   });

   useEffect(() => {
      console.log(range);
   }, [range]);

   return (
      <div className="w-full flex justify-center">
         <div className="h-6 lg:h-8 flex gap-1">
            <PaginationButton
               onClick={() => onChange(currentValue - 1)}
               isDisabled={currentValue === 1}
            >
               <span className="material-symbols-outlined">
                  keyboard_arrow_left
               </span>
            </PaginationButton>
            {range.map((value, index) => (
               <Fragment key={index}>
                  {value === "dots" ? (
                     <div className="h-full aspect-square flex items-center justify-center">
                        <span className="text-lg font-black">...</span>
                     </div>
                  ) : (
                     <PaginationButton
                        isActive={currentValue === value}
                        onClick={() => onChange(value)}
                     >
                        {value.toString()}
                     </PaginationButton>
                  )}
               </Fragment>
            ))}
            <PaginationButton
               onClick={() => onChange(currentValue + 1)}
               isDisabled={currentValue === total}
            >
               <span className="material-symbols-outlined">
                  keyboard_arrow_right
               </span>
            </PaginationButton>
         </div>
      </div>
   );
}
