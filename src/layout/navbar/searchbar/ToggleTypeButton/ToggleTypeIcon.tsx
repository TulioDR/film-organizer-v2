type Props = {
   isMovie: boolean;
};

export default function ToggleTypeIcon({ isMovie }: Props) {
   return (
      <div className="overflow-hidden h-full">
         <div
            className={`flex items-center h-full duration-300 relative ${
               isMovie ? "" : "-translate-x-full"
            }`}
         >
            <span className="material-symbols-outlined !w-10 group-hover:scale-125 duration-100">
               movie
            </span>
            <span className="material-symbols-outlined absolute left-full !w-10 group-hover:scale-125 duration-100">
               smart_display
            </span>
         </div>
      </div>
   );
}
