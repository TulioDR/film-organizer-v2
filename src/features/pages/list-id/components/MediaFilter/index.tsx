import React, { useState } from "react";
import FilterSubtitle from "./FilterSubtitle";
import MediaTypeFilter from "./MediaTypeFilter";
import OrderByFilter from "./OrderByFilter";
import ToggleFilterButton from "./ToggleFilterButton";
import {
   OrderFilterModel,
   TypeFilterModel,
} from "../../models/MediaFilterModel";

type Props = {
   selectedType: TypeFilterModel;
   setSelectedType: React.Dispatch<React.SetStateAction<TypeFilterModel>>;
   sortBy: OrderFilterModel;
   setSortBy: React.Dispatch<React.SetStateAction<OrderFilterModel>>;
};

export default function MediaFilter({
   selectedType,
   setSelectedType,
   sortBy,
   setSortBy,
}: Props) {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => setIsOpen((prev) => !prev);

   return (
      <div className="relative z-10">
         <ToggleFilterButton onClick={toggle} isOpen={isOpen} />
         {isOpen && (
            <div className="p-5 rounded-lg rounded-tr-none bg-secondary-light dark:bg-secondary-dark space-y-4 absolute top-full right-0">
               <div className="space-y-2">
                  <FilterSubtitle>Media type</FilterSubtitle>
                  <MediaTypeFilter
                     selectedType={selectedType}
                     setSelectedType={setSelectedType}
                  />
               </div>
               <div className="space-y-2">
                  <FilterSubtitle>Order by</FilterSubtitle>
                  <OrderByFilter orderBy={sortBy} setOrderBy={setSortBy} />
               </div>
            </div>
         )}
      </div>
   );
}
