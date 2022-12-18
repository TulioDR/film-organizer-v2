import useMediaDetails from "../../../hooks/useMediaDetails";
import Poster from "../../Poster";

type Props = { tv: any };

export default function OnAir({ tv }: Props) {
   const { getMediaDetails } = useMediaDetails();
   return (
      <div
         onClick={() => getMediaDetails("tv", tv.id)}
         className="relative cursor-pointer rounded-lg overflow-hidden group flex flex-col"
      >
         <div className="flex-1 w-full">
            <Poster alt={tv.name} posterPath={tv.poster_path} size="lg" />
         </div>
         <div className="absolute bottom-0 left-0 w-full pt-20 bg-gradient-to-t from-dark-bg to-transparent opacity-0 group-hover:opacity-100 duration-200">
            <div className="text-center text-white font-medium text-xs sm:text-sm w-full px-4 pb-3 translate-y-full group-hover:translate-y-0 duration-200">
               {tv.name}
            </div>
         </div>
      </div>
   );
}
