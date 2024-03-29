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
         <div className="rounded-full border border-white grid place-content-center aspect-square w-8">
            <span
               style={{ fontVariationSettings: `"FILL" 1` }}
               className="material-symbols-outlined text-yellow-600 !text-2xl "
            >
               star_rate
            </span>
         </div>
         <div className="flex items-start gap-2">
            <span style={{ color: themeColor }} className="text-4xl font-bold">
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
