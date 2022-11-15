import Poster from "../../Poster";
import SlideButtons from "../SlideButtons";

type Props = {
   movie: any;
};

const changeDateFormat = (date: string) => {
   return new Date(date).toLocaleDateString("en-gb", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "utc",
   });
};

export default function NowPlaying({ movie }: Props) {
   return (
      <div className="rounded-2xl aspect-video w-full overflow-hidden shadow-md relative group">
         <div className="relative w-full h-full">
            <Poster movie={movie} />
         </div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-gray-900 to-transparent">
            <div className="absolute left-4 bottom-4 w-1/2 space-y-2">
               <div className="text-3xl xl:text-4xl font-bold">
                  {movie.title}
               </div>
               <div className="text-sm">
                  {changeDateFormat(movie.release_date)}
               </div>
               <div className="w-6 grid place-content-center">
                  <span className="material-icons text-5xl">
                     bookmark_border
                  </span>
               </div>
            </div>
            <SlideButtons />
         </div>
      </div>
   );
}
