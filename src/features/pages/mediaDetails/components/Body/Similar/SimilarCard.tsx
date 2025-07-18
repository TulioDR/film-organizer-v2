import Poster from "@/components/Poster";
import { MediaModel } from "@/models/MediaModel";
import Link from "next/link";

type Props = {
   similar: MediaModel;
   href: string;
};

export default function SimilarCard({ similar, href }: Props) {
   return (
      <Link href={href} scroll={false} className="w-full flex flex-col gap-1">
         <div className="w-full aspect-[2/3] rounded-xl overflow-hidden">
            <Poster
               alt={similar.title || similar.name}
               posterPath={similar.poster_path}
               size="lg"
            />
         </div>
         <div className="w-full text-xs md:text-sm text-center">
            {similar.title || similar.name}
         </div>
      </Link>
   );
}
