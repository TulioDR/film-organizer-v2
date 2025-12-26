import React from "react";
import FilterCard from "../../FilterCard";
import CustomSelect from "../../CustomSelect";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import {
   SORT_BY_MOVIE,
   SORT_BY_TV,
} from "@/features/pages/media-type/constants/SORT_BY";
import { OptionModel } from "@/features/pages/media-type/models/DiscoverModel";
import { SORT_BY_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";

type Props = {};

export default function SortByFilter({}: Props) {
   const { mediaType, setSortBy, sortBy } = useMediaFilterContext();

   const handleChange = (option: OptionModel) => {
      setSortBy(option);
   };

   return (
      <FilterCard icon={SORT_BY_ICON} name="Sort by">
         <CustomSelect
            value={sortBy}
            onChange={handleChange}
            options={mediaType === "movie" ? SORT_BY_MOVIE : SORT_BY_TV}
         />
      </FilterCard>
   );
}
