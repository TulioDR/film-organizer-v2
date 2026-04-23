import { useEffect, useState } from "react";
import { SelectOption } from "../../media-type/models/Filters";
import { PlaylistWithItems } from "@/common/models/Playlist";

export default function usePlaylistsFilters(allPlaylists: PlaylistWithItems[]) {
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
   const [filteredPlaylists, setFilteredPlaylists] =
      useState<PlaylistWithItems[]>(allPlaylists);

   useEffect(() => {
      if (!allPlaylists) return;
      let result = [...allPlaylists];

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
   }, [inputValue, selectedSort.value, allPlaylists, setFilteredPlaylists]);

   return {
      setInputValue,
      setSelectedSort,
      filteredPlaylists,
      inputValue,
      selectedSort,
   };
}
