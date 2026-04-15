import ReactLenis from "lenis/react";
import Playlist from "@/common/models/Playlist";
import SearchPlaylistFilter from "./SearchPlaylistFilter";
import SortByPlaylistsFilter from "./SortByPlaylistsFilter";
import { useEffect, useState } from "react";
import useAppSelector from "@/store/hooks/useAppSelector";
import { SelectOption } from "@/features/pages/media-type/models/Filters";

type Props = {
   setFilteredPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
};

export default function CompactPlaylistsFilters({
   setFilteredPlaylists,
}: Props) {
   const { playlists } = useAppSelector((state) => state.playlists);

   const SORT_PLAYLISTS_OPTIONS: SelectOption[] = [
      { value: "alpha_asc", label: "Name (A-Z)" },
      { value: "alpha_desc", label: "Name (Z-A)" },
      { value: "date_desc", label: "Newest First" },
      { value: "date_asc", label: "Oldest First" },
   ];

   const [inputValue, setInputValue] = useState<string>("");
   const [selectedSort, setSelectedSort] = useState<SelectOption>(
      SORT_PLAYLISTS_OPTIONS[3],
   );

   useEffect(() => {
      if (!playlists) return;
      let result = [...playlists];

      if (inputValue) {
         result = result.filter((p) =>
            p.name.toLowerCase().includes(inputValue.toLowerCase()),
         );
      }

      const sortType = selectedSort.value;
      result.sort((a, b) => {
         if (sortType === "alpha_asc") return a.name.localeCompare(b.name);
         if (sortType === "alpha_desc") return b.name.localeCompare(a.name);

         const dateA = new Date(a.created_at || 0).getTime();
         const dateB = new Date(b.created_at || 0).getTime();

         if (sortType === "date_asc") return dateA - dateB;
         return dateB - dateA;
      });

      setFilteredPlaylists(result);
   }, [inputValue, selectedSort.value, playlists, setFilteredPlaylists]);

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
