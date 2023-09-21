type Props = {
   isMovie: boolean;
};

export default function ToggleTypeIcon({ isMovie }: Props) {
   return (
      <div className="overflow-hidden">
         <div
            className={`flex items-center h-full duration-300 relative ${
               isMovie ? "" : "-translate-x-full"
            }`}
         >
            <span className="material-symbols-outlined !w-9">movie</span>
            <span className="material-symbols-outlined absolute left-full !w-9">
               smart_display
            </span>
         </div>
      </div>
   );
}
