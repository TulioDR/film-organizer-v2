import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import usePageTitle from "@/features/layout/page-title/hooks/usePageTitle";
import { useRouter } from "next/router";

type Props = {
   useGenres?: true;
   useMediaType?: true;
   title: string;
   mediaType: string;
};

export default function useSearchMediaTitle({
   useGenres,
   useMediaType,
   title,
   mediaType,
}: Props) {
   const router = useRouter();
   const mediaTypeTitle = mediaType === "movie" ? "Movies" : "TV";

   const genreId = router.query.genre_id;
   const currentGenres = mediaType === "movie" ? movieGenres : tvGenres;
   const selectedGenre = currentGenres.find((g) => g.id === +genreId!);

   const newTitle1 = useMediaType ? mediaTypeTitle : title;
   const newTitle2 = useMediaType ? title : undefined;
   const newTitle3 = useGenres ? selectedGenre?.name : undefined;

   usePageTitle(newTitle1, newTitle2, newTitle3);
}
