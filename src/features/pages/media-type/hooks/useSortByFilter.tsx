import { useState } from "react";
import { SORT_BY_MOVIE } from "../constants/SORT_BY";
import { OptionModel } from "../models/DiscoverModel";

export default function useSortByFilter() {
   const initialSortBy: OptionModel = SORT_BY_MOVIE[0];
   const [sortBy, setSortBy] = useState<OptionModel>(initialSortBy);

   const resetSortBy = () => {
      setSortBy(initialSortBy);
   };

   return { sortBy, setSortBy, resetSortBy };
}
