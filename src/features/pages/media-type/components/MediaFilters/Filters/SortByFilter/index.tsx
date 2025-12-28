import React from "react";
import FilterCard from "../../FilterCard";
import CustomSelect from "../../CustomSelect";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import {
   SORT_BY_MOVIE,
   SORT_BY_TV,
} from "@/features/pages/media-type/constants/SORT_BY";
import { SORT_BY_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";
import { SelectOption } from "@/features/pages/media-type/models/Filters";

type Props = {};

export default function SortByFilter({}: Props) {
   const { state, dispatch } = useMediaFilterContext();

   const handleChange = (option: SelectOption) => {
      dispatch({ type: "SET_SORT", payload: option });
   };

   const isMovie = state.mediaType === "movie";

   return (
      <FilterCard icon={SORT_BY_ICON} name="Sort by">
         <CustomSelect
            value={state.sortBy}
            onChange={handleChange}
            options={isMovie ? SORT_BY_MOVIE : SORT_BY_TV}
         />
      </FilterCard>
   );
}
