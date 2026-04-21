import ReactLenis from "lenis/react";
import SearchPlaylistFilter from "./SearchPlaylistFilter";
import SortByPlaylistsFilter from "./SortByPlaylistsFilter";
import { SelectOption } from "@/features/pages/media-type/models/Filters";

type Props = {
   inputValue: string;
   setInputValue: React.Dispatch<React.SetStateAction<string>>;
   selectedSort: SelectOption;
   setSelectedSort: React.Dispatch<React.SetStateAction<SelectOption>>;
};

export default function CompactPlaylistsFilters({
   inputValue,
   selectedSort,
   setInputValue,
   setSelectedSort,
}: Props) {
   const SORT_PLAYLISTS_OPTIONS: SelectOption[] = [
      { value: "alpha_asc", label: "Name (A-Z)" },
      { value: "alpha_desc", label: "Name (Z-A)" },
      { value: "date_desc", label: "Newest First" },
      { value: "date_asc", label: "Oldest First" },
   ];

   return (
      <ReactLenis className="h-full w-full overflow-y-auto">
         <div className="grid gap-4 p-4 min-h-max">
            <SearchPlaylistFilter
               inputValue={inputValue}
               setInputValue={setInputValue}
            />
            <SortByPlaylistsFilter
               SORT_PLAYLISTS_OPTIONS={SORT_PLAYLISTS_OPTIONS}
               selectedSort={selectedSort}
               setSelectedSort={setSelectedSort}
            />
         </div>
      </ReactLenis>
   );
}
