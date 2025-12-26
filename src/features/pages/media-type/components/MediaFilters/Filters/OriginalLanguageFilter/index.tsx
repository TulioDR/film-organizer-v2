import React from "react";
import FilterCard from "../../FilterCard";
import CustomSelect from "../../CustomSelect";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import { OptionModel } from "@/features/pages/media-type/models/DiscoverModel";
import { ORIGINAL_LANGUAGE_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";

type Props = {};

export default function OriginalLanguageFilter({}: Props) {
   const { languagesOptions, language, setLanguage } = useMediaFilterContext();

   const handleChange = (option: OptionModel) => {
      setLanguage(option);
   };

   return (
      <FilterCard icon={ORIGINAL_LANGUAGE_ICON} name="Original language">
         <CustomSelect
            isClearable
            value={language}
            options={languagesOptions}
            onChange={handleChange}
            menuPlacement="top"
         />
      </FilterCard>
   );
}
