import React from "react";
import FilterCard from "../../FilterCard";
import CustomSelect from "../../CustomSelect";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import { ORIGIN_COUNTRY_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";
import { SelectOption } from "@/features/pages/media-type/models/Filters";

type Props = {};

export default function OriginCountryFilter({}: Props) {
   const { countriesOptions, state, dispatch } = useMediaFilterContext();

   const handleChange = (option: SelectOption) => {
      dispatch({ type: "SET_COUNTRY", payload: option });
   };

   return (
      <FilterCard icon={ORIGIN_COUNTRY_ICON} name="Origin country">
         <CustomSelect
            isClearable
            value={state.country}
            onChange={handleChange}
            options={countriesOptions}
            menuPlacement="top"
         />
      </FilterCard>
   );
}
