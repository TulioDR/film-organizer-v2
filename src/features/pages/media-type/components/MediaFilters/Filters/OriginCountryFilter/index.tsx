import React from "react";
import FilterCard from "../../FilterCard";
import CustomSelect from "../../CustomSelect";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import { OptionModel } from "@/features/pages/media-type/models/DiscoverModel";
import { ORIGIN_COUNTRY_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";

type Props = {};

export default function OriginCountryFilter({}: Props) {
   const { countriesOptions, country, setCountry } = useMediaFilterContext();

   const handleChange = (option: OptionModel) => {
      setCountry(option);
   };

   return (
      <FilterCard icon={ORIGIN_COUNTRY_ICON} name="Origin country">
         <CustomSelect
            isClearable
            value={country}
            onChange={handleChange}
            options={countriesOptions}
            menuPlacement="top"
         />
      </FilterCard>
   );
}
