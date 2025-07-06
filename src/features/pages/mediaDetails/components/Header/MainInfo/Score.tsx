import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";

type Props = {
   score: number;
};

export default function Score({ score }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   const oneDecimal = (voteAverage: number): string | number => {
      if (voteAverage) {
         return Math.round(voteAverage * 10) / 10;
      } else return "N/A";
   };
   return (
      <div className="flex items-center space-x-2 font-oswald">
         <div className="rounded-full bg-white flex items-center justify-center aspect-square w-10">
            <span
               style={{ fontVariationSettings: `"FILL" 1` }}
               className="material-symbols-outlined text-yellow-600 !text-3xl "
            >
               star_rate
            </span>
         </div>
         <div className="flex items-start gap-2">
            <span className="text-4xl font-bold text-white">
               {oneDecimal(score)}
            </span>
            <span className="text-lg">
               <span className="mr-[2px]">/</span>
               <span>10</span>
            </span>
         </div>
      </div>
   );
}
