import UpcomingPoster from "./UpcomingPoster";

type Props = { movie: any };

export default function Upcoming({ movie }: Props) {
   return (
      <div className="rounded-2xl aspect-video overflow-hidden shadow-md relative">
         <UpcomingPoster movie={movie} />
         <div className="w-full absolute bottom-0 bg-gradient-to-t from-gray-900 to-transparent px-4 pb-3 pt-10">
            <div className="text-lg">{movie.title}</div>
         </div>
      </div>
   );
}
