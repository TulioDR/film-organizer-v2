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
         <div className="flex justify-between gap-2 text-dark-text-soft">
            <div className="flex-1">
               <h4 className="leading-5 font-semibold text-dark-text-hard text-base uppercase">
                  {title}
               </h4>
               <div className="text-xs">
                  {year ? year.substring(0, 4) : "N/A"}
               </div>
            </div>
            <div className="flex items-start gap-[1px] h-7">
               <span className="text-xl font-bold text-white">
                  {voteAverage || "N/A"}
               </span>
               <span className="material-icons-round text-yellow-600 !text-lg grid place-content-center -translate-y-[2px]">
                  star
               </span>
            </div>
         </div>
         <div className="flex-1 relative overflow-hidden text-sm leading-tight text-dark-text-normal mt-1">
            <p>{overview}</p>
            <div className="w-full absolute bottom-0 left-0 h-8 bg-gradient-to-t from-secondary to-transparent"></div>
         </div>
      </div>
   );
}
