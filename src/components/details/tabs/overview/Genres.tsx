import { useRouter } from "next/router";

type Props = {
   genres: any[];
   isMovie: boolean;
};

export default function Genres({ genres, isMovie }: Props) {
   const router = useRouter();
   const goToGenre = (id: number): void => {
      router.push(`/genres/${isMovie ? "movie" : "tv"}/${id}`);
   };
   return (
      <>
         {genres.map((genre) => (
            <span
               key={genre.id}
               className="bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md px-2 py-1 cursor-pointer mr-2 float-left my-1"
            >
               {genre.name}
            </span>
         ))}
      </>
   );
}
