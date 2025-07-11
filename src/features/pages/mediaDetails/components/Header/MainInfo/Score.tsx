import CardContainer from "./CardContainer";

type Props = {
   score: number;
};

export default function Score({ score }: Props) {
   const oneDecimal = (voteAverage: number): string | number => {
      if (voteAverage) {
         return Math.round(voteAverage * 10) / 10;
      } else return "N/A";
   };
   return (
      // <div className="flex items-center gap-1 font-oswald rounded-md bg-gray-200 text-black h-16 pl-4 pr-4">
      <CardContainer>
         <span
            style={{ fontVariationSettings: `"FILL" 1` }}
            className="material-symbols-outlined text-yellow-600 !text-4xl "
         >
            star_rate
         </span>
         <div className="flex items-start gap-1">
            <span className="text-4xl font-bold">{oneDecimal(score)}</span>
            <span className="text-lg">
               <span className="mr-[2px]">/</span>
               <span>10</span>
            </span>
         </div>
      </CardContainer>
      // </div>
   );
}
