import React from "react";
import InnerCustomPagination from "./InnerCustomPagination";

type Props = {
   total: number;
   value: number;
   onChange: (page: number) => void;
};

export default function CustomPagination({ total, value, onChange }: Props) {
   return (
      <>
         <div className="sm:hidden">
            <InnerCustomPagination
               sm
               value={value}
               total={total}
               onChange={onChange}
            />
         </div>
         <div className="hidden sm:block">
            <InnerCustomPagination
               value={value}
               total={total}
               onChange={onChange}
            />
         </div>
      </>
   );
}
