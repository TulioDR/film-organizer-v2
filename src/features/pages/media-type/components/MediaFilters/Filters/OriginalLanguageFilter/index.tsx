import React from "react";
import FilterCard from "../../FilterCard";
import CustomSelect from "../../CustomSelect";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import { OptionModel } from "@/features/pages/media-type/models/DiscoverModel";

type Props = {};

export default function OriginalLanguageFilter({}: Props) {
   const { languagesOptions, language, setLanguage } = useMediaFilterContext();

   const handleChange = (option: OptionModel) => {
      setLanguage(option);
   };

   return (
      <FilterCard icon="translate" name="Original language">
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
