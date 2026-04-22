import { useEffect, useState } from "react";
import { SelectOption } from "@/features/pages/media-type/models/Filters";
import SortByMediaFilter from "./SortByMediaFilter";
import DisplayMediaFilter from "./DisplayMediaFilter";
import { PlaylistItems } from "@/common/models/Playlist";
import { useCustomLenis } from "@/common/hooks/useCustomLenis";

type Props = {
   allMedia: PlaylistItems[];
   setFilteredMedia: React.Dispatch<React.SetStateAction<PlaylistItems[]>>;
};

export default function CompactPlaylistDetailsFilter({
   allMedia,
   setFilteredMedia,
}: Props) {
   const SORT_MEDIA_OPTIONS: SelectOption[] = [
      { value: "alpha_asc", label: "Title (A-Z)" },
      { value: "alpha_desc", label: "Title (Z-A)" },
      { value: "date_added_desc", label: "Recently Added" },
      { value: "date_added_asc", label: "Oldest Added" },
      { value: "release_desc", label: "Release Date (Newest)" },
      { value: "release_asc", label: "Release Date (Oldest)" },
   ];

   const [selectedSort, setSelectedSort] = useState<SelectOption>(
      SORT_MEDIA_OPTIONS[3],
   );

   const [displayMedia, setDisplayMedia] = useState<"movie" | "tv" | "all">(
      "all",
   );

   useEffect(() => {
      console.log(displayMedia);
   }, [displayMedia]);

   useEffect(() => {
      if (!allMedia) return;

      let result = [...allMedia];

      if (displayMedia !== "all") {
         result = result.filter((item) => item.media_type === displayMedia);
      }

      const sortType = selectedSort.value;
      result.sort((a, b) => {
         // Alphabetical (A-Z / Z-A)
         if (sortType === "alpha_asc")
            return a.media.title.localeCompare(b.media.title);
         if (sortType === "alpha_desc")
            return b.media.title.localeCompare(a.media.title);

         const addedA = new Date(a.added_at || 0).getTime();
         const addedB = new Date(b.added_at || 0).getTime();
         if (sortType === "date_added_asc") return addedA - addedB;
         if (sortType === "date_added_desc") return addedB - addedA;

         const relA = new Date(
            a.media.release_date || a.media.first_air_date || 0,
         ).getTime();
         const relB = new Date(
            b.media.release_date || b.media.first_air_date || 0,
         ).getTime();
         if (sortType === "release_asc") return relA - relB;
         if (sortType === "release_desc") return relB - relA;

         return 0;
      });

      console.log(result);

      setFilteredMedia(result);
   }, [allMedia, selectedSort.value, displayMedia, setFilteredMedia]);

   const { scrollWrapperRef } = useCustomLenis();

   return (
      <div ref={scrollWrapperRef} className="h-full w-full overflow-y-auto">
         <div className="grid gap-4 p-4 min-h-max">
            <DisplayMediaFilter
               displayMedia={displayMedia}
               setDisplayMedia={setDisplayMedia}
            />
            <SortByMediaFilter
               SORT_MEDIA_OPTIONS={SORT_MEDIA_OPTIONS}
               selectedSort={selectedSort}
               setSelectedSort={setSelectedSort}
            />
         </div>
      </div>
   );
}
