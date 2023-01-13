import useListsContext from "../../../context/ListsContext";
import useThemeContext from "../../../context/ThemeContext";
import useIsMediaSaved from "../../../hooks/useIsMediaSaved";
import useMediaDetails from "../../../hooks/useMediaDetails";
import Poster from "../../Poster";

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
   const { getMediaDetails } = useMediaDetails();
   const { themeColor } = useThemeContext();
   const { openSaveMediaModal } = useListsContext();

   const { isMediaSaved } = useIsMediaSaved(movie.id, "movie");

   return (
      <div className="rounded-2xl aspect-video w-full overflow-hidden shadow-md relative">
         <Poster
            alt={movie.title}
            posterPath={movie.backdrop_path}
            size="xl"
            backPoster
         />
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-dark-bg-primary to-transparent">
            <div className="absolute left-4 bottom-4 w-1/2 space-y-2">
               <div className="text-3xl xl:text-4xl font-bold text-dark-text-hard">
                  {movie.title}
               </div>
               <div className="text-sm text-dark-text-normal">
                  {changeDateFormat(movie.release_date)}
               </div>
               <div className="flex items-center space-x-4 text-dark-text-hard">
                  <button
                     onClick={() => openSaveMediaModal("movie", movie)}
                     className="w-6 grid place-content-center"
                  >
                     <span className="material-icons text-5xl">
                        {isMediaSaved ? "bookmark" : "bookmark_border"}
                     </span>
                  </button>
                  <button
                     onClick={() => getMediaDetails("movie", movie.id)}
                     className="rounded-lg group backdrop-blur drop-shadow-lg px-3 border border-gray-500 h-10 text-sm font-medium relative overflow-hidden text-white"
                  >
                     <div
                        style={{ backgroundColor: themeColor }}
                        className="absolute h-full top-0 left-0 -z-10 w-0 group-hover:w-full duration-200"
                     ></div>
                     Learn More
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
