import ImageLink from "@/common/components/ImageLink";
import MT_Title from "@/features/pages/media-type/components/MT_Title";
import SelectorBackground from "@/features/pages/media-type/components/SelectorBackground";
import GenresBackground from "@/features/pages/media-type/components/GenresBackground";
import usePageTitle from "@/features/layout/page-title/hooks/usePageTitle";
import { GetServerSideProps } from "next";
import API_PUBLIC from "@/api/public";
import { Media } from "@/common/models/Media";
import GenreModel from "@/features/pages/genres/models/GenreModel";
import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import AnimationContainer from "@/features/pages/media-type/components/AnimationContainer";
import { AnimatePresence } from "framer-motion";
import PageHead from "@/common/components/PageHead";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { media_type } = context.query;
   if (media_type !== "movie" && media_type !== "tv") return { notFound: true };

   const popularApi = `/${media_type}/popular/1`;
   const trendingApi = `/${media_type}/trending/1`;
   const topRatedApi = `/${media_type}/top-rated/1`;

   const [
      { data: popularData },
      { data: trendingData },
      { data: topRatedData },
   ] = await Promise.all([
      API_PUBLIC.get(popularApi),
      API_PUBLIC.get(trendingApi),
      API_PUBLIC.get(topRatedApi),
   ]);

   const selectedGenres = media_type === "movie" ? movieGenres : tvGenres;
   const newGenres = selectedGenres.slice(0, 16);

   return {
      props: {
         popularMedia: popularData.results[0],
         trendingMedia: trendingData.results[0],
         topRatedMedia: topRatedData.results[0],
         media_type,
         genres: newGenres,
      },
   };
};

type Props = {
   popularMedia: Media;
   trendingMedia: Media;
   topRatedMedia: Media;
   media_type: "movie" | "tv";
   genres: GenreModel[];
};

export default function MediaType({
   popularMedia,
   trendingMedia,
   topRatedMedia,
   media_type,
   genres,
}: Props) {
   usePageTitle(media_type);

   const elementsArray = [
      {
         link: `/${media_type}/popular`,
         background: <SelectorBackground media={popularMedia} />,
         icon: "local_fire_department",
         title: "Popular",
      },
      {
         link: `/${media_type}/genres`,
         background: <GenresBackground genres={genres} />,
         icon: "theater_comedy",
         title: "Genres",
      },
      {
         link: `/${media_type}/trending`,
         background: <SelectorBackground media={trendingMedia} />,
         icon: "trending_up",
         title: "Trending",
      },
      {
         link: `/${media_type}/top-rated`,
         background: <SelectorBackground media={topRatedMedia} />,
         icon: "star",
         title: "Top Rated",
      },
   ];

   return (
      <>
         <PageHead title={media_type === "movie" ? "Movies" : "TV"} />
         <AnimatePresence mode="wait" propagate>
            <div
               key={media_type}
               className="w-full grid md:grid-cols-2 md:grid-rows-2 gap-4 xl:gap-8 flex-grow overflow-hidden"
            >
               {elementsArray.map((element, index) => (
                  <AnimationContainer
                     key={element.link}
                     index={index}
                     clockwise={true}
                  >
                     <ImageLink
                        link={element.link}
                        background={element.background}
                        front={
                           <MT_Title
                              icon={element.icon}
                              title={element.title}
                           />
                        }
                        className="rounded-md border border-border h-full"
                     />
                  </AnimationContainer>
               ))}
            </div>
         </AnimatePresence>
      </>
   );
}
