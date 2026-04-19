import Poster from "@/common/components/Poster";
import { Media } from "@/common/models/Media";
import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   media: Media;
};

export default function Front({ media }: Props) {
   return (
      <div
         style={{ borderRadius: STANDARD_RADIUS }}
         className="relative [backface-visibility:hidden] overflow-hidden shadow-xl w-full h-full border-border-width border-border-light dark:border-border-dark"
      >
         <Poster
            alt={media.name || media.title}
            posterPath={media.poster_path}
         />
      </div>
   );
}
