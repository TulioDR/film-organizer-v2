type Props = {
   voteAverage: string;
   title: string;
   overview: string;
   year: string;
};

export default function BackInfo({
   voteAverage,
   title,
   overview,
   year,
}: Props) {
   return (
      <div className="w-full flex-1 flex flex-col overflow-hidden pb-4">
         <h4 className="leading-5 font-semibold text-dark-text-hard">
            {title}
         </h4>
         <div className="flex justify-between items-center text-dark-text-soft text-sm">
            <span className="">{year ? year.substring(0, 4) : "N/A"}</span>
            <div className="flex items-center space-x-1">
               <span className="material-icons text-yellow-500 text-sm">
                  star_rate
               </span>
               <span>{voteAverage || "N/A"}</span>
            </div>
         </div>
         <div className="flex-1 relative overflow-hidden text-sm leading-tight text-dark-text-normal mt-1">
            <p>{overview}</p>
            <div className="w-full absolute bottom-0 left-0 h-8 bg-gradient-to-t from-secondary to-transparent"></div>
         </div>
      </div>
   );
}
