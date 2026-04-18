import { MediaDetailsModel } from "../../models/MediaDetailsModel";
import Overview from "./Overview";
import MediaData from "./MediaData";
import Seasons from "./Seasons";
import Trailers from "./Trailers";
import People from "./People";
import Similar from "./Similar";

type Props = {
   media_type: "tv" | "movie";
   media: MediaDetailsModel;
};

export default function Body({ media, media_type }: Props) {
   return (
      <div className="gap-4 xl:gap-8 grid xl:grid-cols-2 text-black relative mt-4 xl:-mt-20 px-4 lg:px-32 pb-14 mb-4 xl:mb-0 xl:pb-4">
         <Overview media={media} />
         <MediaData
            media={media}
            crew={media.created_by || media.credits.crew}
            isMovie={media_type === "movie"}
         />
         {media_type === "tv" && (
            <Seasons seasons={media.seasons} seriesID={media.id} />
         )}
         <Trailers trailers={media.videos.results} />
         <People type="Cast" people={media.credits?.cast} />
         <People type="Crew" people={media.credits?.crew} />
         <Similar media={media} mediaType={media_type} />
      </div>
   );
}
