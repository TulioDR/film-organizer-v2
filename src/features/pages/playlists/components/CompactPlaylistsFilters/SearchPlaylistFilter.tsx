import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import MainFilterCard from "@/features/mainFilter/components/MainFilterCard";

type Props = {
   inputValue: string;
   setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchPlaylistFilter({
   inputValue,
   setInputValue,
}: Props) {
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
   };

   return (
      <MainFilterCard name="Search playlist" icon="search">
         <div
            style={{ borderRadius: STANDARD_RADIUS }}
            className="h-10 w-full px-4 bg-white dark:bg-black border border-border-light dark:border-border-dark flex items-center"
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
