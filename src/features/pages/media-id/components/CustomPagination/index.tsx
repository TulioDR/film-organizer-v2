import React from "react";
import InnerCustomPagination from "./InnerCustomPagination";
import Responsive from "@/common/components/Responsive";
import { LG_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";

type Props = {
   total: number;
   value: number;
   onChange: (page: number) => void;
};

export default function CustomPagination({ total, value, onChange }: Props) {
   return (
      <>
         <Responsive minWidth={LG_MEDIA_QUERY}>
            <InnerCustomPagination
               value={value}
               total={total}
               onChange={onChange}
            />
         </Responsive>
         <Responsive maxWidth={LG_MEDIA_QUERY}>
            <InnerCustomPagination
               sm
               value={value}
               total={total}
               onChange={onChange}
            />
         </Responsive>
      </>
   );
}
