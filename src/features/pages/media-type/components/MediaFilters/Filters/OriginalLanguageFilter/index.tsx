import React from "react";
import FilterCard from "../../FilterCard";
import CustomSelect from "../../CustomSelect";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import { ORIGINAL_LANGUAGE_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";
import { SelectOption } from "@/features/pages/media-type/models/Filters";

type Props = {};

export default function OriginalLanguageFilter({}: Props) {
   const { languagesOptions, state, dispatch } = useMediaFilterContext();

   const handleChange = (option: SelectOption) => {
      dispatch({ type: "SET_LANGUAGE", payload: option });
   };

   return (
      <FilterCard icon={ORIGINAL_LANGUAGE_ICON} name="Original language">
         <CustomSelect
            isClearable
            value={state.language}
            options={languagesOptions}
            onChange={handleChange}
            menuPlacement="top"
         />
      </FilterCard>
   );
}
