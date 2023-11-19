import Poster from "@/components/Poster";
import { MediaModel } from "@/models/MediaModel";
import Link from "next/link";

type Props = {
   similar: MediaModel;
   href: string;
};

export default function SimilarCard({ similar, href }: Props) {
   const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <Link
         href={href}
         onClick={handleClick}
         className="cursor-pointer flex-shrink-0 w-28 xl:w-full flex flex-col gap-1"
      >
         <div className="w-full">
            <Poster
               alt={similar.title || similar.name}
               posterPath={similar.poster_path}
               size="md"
            />
         </div>
         <div className="w-full text-xs md:text-sm text-center">
            {similar.title || similar.name}
         </div>
      </Link>
   );
}
