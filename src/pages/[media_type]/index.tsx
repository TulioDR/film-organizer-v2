import TypeSelector from "@/features/pages/mediaType/components/TypeSelector";
import GenresBackground from "@/features/pages/mediaType/components/GenresBackground";
import SelectorBackground from "@/features/pages/mediaType/components/SelectorBackground";
import { useRouter } from "next/router";

type Props = {};

export default function MediaTypePage({}: Props) {
   const router = useRouter();
   const mediaType = router.query.media_type;

   return (
      <div className=" w-full h-[100svh] pt-36 xl:pt-44 px-24 xl:px-32 lg:pb-4 xl:pb-8">
         <div className="w-full h-full grid grid-cols-2 grid-rows-2">
            <TypeSelector
               link={`/${mediaType}/popular`}
               title="Popular"
               background={<SelectorBackground type="popular" />}
            />
            <TypeSelector
               link={`/${mediaType}/genres`}
               title="Genres"
               background={<GenresBackground />}
            />
            <TypeSelector
               link={`/${mediaType}/trending`}
               title="Trending"
               background={<SelectorBackground type="trending" />}
            />
            <TypeSelector
               link={`/${mediaType}/top-rated`}
               title="Top rated"
               background={<SelectorBackground type="top-rated" />}
            />
         </div>
      </div>
   );
}
