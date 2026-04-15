import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import Playlist from "@/common/models/Playlist";
import MainFilterCard from "@/features/mainFilter/components/MainFilterCard";
import useAppSelector from "@/store/hooks/useAppSelector";
import { useEffect, useState } from "react";

type Props = {
   setFilteredPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
};

export default function SearchPlaylistFilter({ setFilteredPlaylists }: Props) {
   const { playlists } = useAppSelector((state) => state.playlists);
   const [inputValue, setInputValue] = useState<string>("");
   useEffect(() => {
      const founded = playlists.filter(({ name }) =>
         name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()),
      );
      setFilteredPlaylists(founded);
   }, [inputValue, playlists]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
   };

   return (
      <MainFilterCard name="Search playlist" icon="search">
         <div
            style={{ borderRadius: STANDARD_RADIUS }}
            className="h-12 w-full px-4 bg-white dark:bg-black border border-border-light dark:border-border-dark flex items-center"
         >
            <input
               type="text"
               placeholder="Search for a playlist"
               className="flex-1 bg-transparent h-full outline-none text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50"
               onChange={handleChange}
               value={inputValue}
            />
            <span className="material-symbols-outlined text-text-3">
               search
            </span>
         </div>
      </MainFilterCard>
   );
}
