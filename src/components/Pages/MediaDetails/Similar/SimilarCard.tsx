import Poster from "@/components/Poster";
import { MediaModel } from "@/models/MediaModel";
import { posterAnimationActions } from "@/store/slices/poster-animation-slice";
import Link from "next/link";
import { useDispatch } from "react-redux";

type Props = {
   similar: MediaModel;
   href: string;
};

export default function SimilarCard({ similar, href }: Props) {
   const dispatch = useDispatch();
   const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(posterAnimationActions.changePosterAnimation(true));
   };

   return (
      <Link
         href={href}
         onClick={handleClick}
         className="cursor-pointer w-full flex flex-col gap-1"
      >
         <div className="w-full">
            <Poster
               alt={similar.title || similar.name}
               posterPath={similar.poster_path}
               size="md"
               roundedSmall
            />
         </div>
         <div className="w-full text-xs sm:text-sm text-center">
            {similar.title || similar.name}
         </div>
      </Link>
   );
}
