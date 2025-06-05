import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import GenreCard from "../GenreCard";

type Props = {
   mediaType: "movie" | "tv";
};

export default function GenreLayout({ mediaType }: Props) {
   const isMovie = mediaType === "movie";
   const genresArray = isMovie ? movieGenres : tvGenres;

   return (
      <div className="w-full grid grid-cols-3 2xl:grid-cols-4 gap-8">
         {genresArray.map((genre) => (
            <GenreCard key={genre.id} genre={genre} mediaType={mediaType} />
         ))}
      </div>
   );
}
