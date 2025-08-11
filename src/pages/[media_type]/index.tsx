import { useRouter } from "next/router";
import ImageLink from "@/common/components/ImageLink";
import MT_Title from "@/features/pages/media-type/components/MT_Title";
import SelectorBackground from "@/features/pages/media-type/components/SelectorBackground";
import GenresBackground from "@/features/pages/media-type/components/GenresBackground";

type Props = {};

export default function MediaType({}: Props) {
   const router = useRouter();
   const mediaType = router.query.media_type;

   return (
      <div className=" w-full h-[100svh] pt-36 xl:pt-44 px-24 xl:px-32 lg:pb-4 xl:pb-8">
         <div className="w-full h-full grid grid-cols-2 grid-rows-2 rounded-lg overflow-hidden border border-border">
            <ImageLink
               link={`/${mediaType}/popular`}
               background={<SelectorBackground type="popular" />}
               front={<MT_Title icon="local_fire_department" title="Popular" />}
            />
            <ImageLink
               link={`/${mediaType}/genres`}
               background={<GenresBackground />}
               front={<MT_Title icon="theater_comedy" title="Genres" />}
            />
            <ImageLink
               link={`/${mediaType}/trending`}
               background={<SelectorBackground type="trending" />}
               front={<MT_Title icon="trending_up" title="Trending" />}
            />
            <ImageLink
               link={`/${mediaType}/top-rated`}
               background={<SelectorBackground type="top-rated" />}
               front={<MT_Title icon="star" title="Top Rated" />}
            />
         </div>
      </div>
   );
}
