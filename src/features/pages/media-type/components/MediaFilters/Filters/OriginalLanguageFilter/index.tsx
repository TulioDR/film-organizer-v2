import CustomSelect from "../../CustomSelect";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import { ORIGINAL_LANGUAGE_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";
import { SelectOption } from "@/features/pages/media-type/models/Filters";
import MainFilterCard from "@/features/mainFilter/components/MainFilterCard";

type Props = {};

export default function OriginalLanguageFilter({}: Props) {
   const { languagesOptions, state, dispatch } = useMediaFilterContext();

   const handleChange = (option: SelectOption) => {
      dispatch({ type: "SET_LANGUAGE", payload: option });
   };

   return (
      <MainFilterCard icon={ORIGINAL_LANGUAGE_ICON} name="Original language">
         <CustomSelect
            isClearable
            value={state.language}
            options={languagesOptions}
            onChange={handleChange}
            menuPlacement="top"
         />
      </MainFilterCard>
   );
}
