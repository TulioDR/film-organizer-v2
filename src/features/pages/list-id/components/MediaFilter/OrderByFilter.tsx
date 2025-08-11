import React from "react";
import FilterButton from "./FilterButton";
import { OrderFilterModel } from "../../models/MediaFilterModel";

type Props = {
   orderBy: OrderFilterModel;
   setOrderBy: React.Dispatch<React.SetStateAction<OrderFilterModel>>;
};

export default function OrderByFilter({ orderBy, setOrderBy }: Props) {
   return (
      <div className="flex gap-3">
         <FilterButton
            isSelected={orderBy === "oldest"}
            onClick={() => setOrderBy("oldest")}
         >
            Oldest
         </FilterButton>
         <FilterButton
            isSelected={orderBy === "newest"}
            onClick={() => setOrderBy("newest")}
         >
            Newest
         </FilterButton>
      </div>
   );
}
