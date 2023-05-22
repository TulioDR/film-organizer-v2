type Props = {
   episode: any;
};

export default function InfoInPoster({ episode }: Props) {
   return (
      <div className="px-2 pb-1 pt-10 absolute bottom-0 w-full flex justify-between items-center text-dark-text-hard bg-gradient-to-t from-black/80 to-transparent">
         <div className="text-xs">Episode {episode.episode_number}</div>
         <div className="flex items-center space-x-1">
            <div>
               {episode.vote_count ? episode.vote_average.toFixed(1) : "N/A"}
            </div>
            <div className="material-icons text-yellow-600 text-lg grid place-items-center">
               star_rate
            </div>
         </div>
      </div>
   );
}
