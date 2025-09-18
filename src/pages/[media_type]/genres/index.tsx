import GenreCard from "@/features/pages/genres/components/GenreCard";
import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import GenresContainer from "@/features/pages/genres/components/GenresContainer";
import PageHead from "@/common/components/PageHead";
import usePageTitle from "@/features/layout/page-title/hooks/usePageTitle";
import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import GenreModel from "@/features/pages/genres/models/GenreModel";
import useScrollToTop from "@/common/hooks/useScrollToTop";
import useStopLoader from "@/features/layout/loader/hooks/useStopLoader";

type GenresProps = {
   genres: GenreModel[];
   mediaType: "movie" | "tv";
};

export const getStaticPaths: GetStaticPaths = async () => {
   const paths = [
      { params: { media_type: "movie" } },
      { params: { media_type: "tv" } },
   ];
   return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<GenresProps> = async (context) => {
   const mediaType = context.params?.media_type as "movie" | "tv";
   const isMovie = mediaType === "movie";
   const genres = isMovie ? movieGenres : tvGenres;

   return { props: { genres, mediaType } };
};

export default function Genres({ genres, mediaType }: GenresProps) {
   usePageTitle(mediaType, {
      text: "Genres",
      link: `/${mediaType}/genres`,
   });
   useScrollToTop();
   useStopLoader();

   return (
      <>
         <PageHead title="Genres" />
         <GenresContainer>
            {genres.map((genre) => (
               <GenreCard key={genre.id} genre={genre} mediaType={mediaType} />
            ))}
         </GenresContainer>
      </>
   );
}
