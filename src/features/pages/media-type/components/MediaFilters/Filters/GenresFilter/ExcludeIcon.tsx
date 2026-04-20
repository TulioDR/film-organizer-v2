import { GENRES_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";

type Props = {};

export default function ExcludeIcon({}: Props) {
   return (
      <div className="h-full aspect-square relative flex items-center justify-center">
         <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined">close</span>
         </div>
         <span className="material-symbols-outlined opacity-50">
            {GENRES_ICON}
         </span>
      </div>
   );
}
