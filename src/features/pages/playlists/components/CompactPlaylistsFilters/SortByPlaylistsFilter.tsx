import MainFilterCard from "@/features/mainFilter/components/MainFilterCard";
import CustomSelect from "@/features/pages/media-type/components/MediaFilters/CustomSelect";
import { SORT_BY_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";
import { SelectOption } from "@/features/pages/media-type/models/Filters";

type Props = {
   SORT_PLAYLISTS_OPTIONS: SelectOption[];
   selectedSort: SelectOption;
   setSelectedSort: React.Dispatch<React.SetStateAction<SelectOption>>;
};

export default function SortByPlaylistsFilter({
   SORT_PLAYLISTS_OPTIONS,
   selectedSort,
   setSelectedSort,
}: Props) {
   const handleChange = (option: SelectOption) => {
      setSelectedSort(option);
   };

   return (
      <MainFilterCard icon={SORT_BY_ICON} name="Sort by">
         <CustomSelect
            value={selectedSort}
            onChange={handleChange}
            options={SORT_PLAYLISTS_OPTIONS}
         />
      </MainFilterCard>
   );
}
