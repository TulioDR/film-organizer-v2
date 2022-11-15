import Poster from "../../Poster";

type Props = { movie: any };

export default function Upcoming({ movie }: Props) {
   return (
      <div className="rounded-2xl aspect-video overflow-hidden shadow-md relative">
         <Poster
            alt={movie.title}
            posterPath={movie.backdrop_path}
            size="xl"
            backPoster
         />
         <div className="w-full absolute bottom-0 bg-gradient-to-t from-gray-900 to-transparent px-4 pb-3 pt-10">
            <div className="text-lg">{movie.title}</div>
         </div>
      </div>
   );
}
