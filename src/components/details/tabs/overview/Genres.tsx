import { useRouter } from "next/router";
import useThemeContext from "../../../../context/ThemeContext";

type Props = {
   genres: any[];
   isMovie: boolean;
};

export default function Genres({ genres, isMovie }: Props) {
   const { themeColor } = useThemeContext();

   const router = useRouter();
   const goToGenre = (id: number): void => {
      router.push(`/genres/${isMovie ? "movie" : "tv"}/${id}`);
   };
   return (
      <>
         {genres.map((genre) => (
            <span
               key={genre.id}
               onClick={() => goToGenre(genre.id)}
               style={{ backgroundColor: themeColor }}
               className="text-white text-sm rounded-md px-2 py-1 cursor-pointer mr-2 float-left my-1"
            >
               {genre.name}
            </span>
         ))}
      </>
   );
}
