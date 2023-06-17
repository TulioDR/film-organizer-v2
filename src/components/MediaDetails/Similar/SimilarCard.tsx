import Poster from "@/components/Poster";
import { MediaModel } from "@/models/MediaModel";
import Link from "next/link";

type Props = {
   similar: MediaModel;
   href: string;
};

export default function SimilarCard({ similar, href }: Props) {
   return (
      <Link href={href} className="cursor-pointer w-full flex flex-col gap-1">
         <div className="w-full">
            <Poster
               alt={similar.title || similar.name}
               posterPath={similar.poster_path}
               size="md"
            />
         </div>
         <div className="w-full text-xs sm:text-sm text-center">
            {similar.title || similar.name}
         </div>
      </Link>
   );
}
