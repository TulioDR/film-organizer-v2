import InfoSubtitle from "../InfoSubtitle";
import Trailer from "./Trailer";

type Props = {
   trailers: any[];
};

export default function Trailers({ trailers }: Props) {
   return (
      <div className="w-full">
         <InfoSubtitle>Trailers</InfoSubtitle>
         {trailers.length > 0 ? (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
               {trailers.map((trailer) => (
                  <Trailer key={trailer.id} trailer={trailer} />
               ))}
            </div>
         ) : (
            <div>No trailers available</div>
         )}
      </div>
   );
}
