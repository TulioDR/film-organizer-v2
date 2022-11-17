type Props = {
   score: number;
};

export default function Score({ score }: Props) {
   const oneDecimal = (voteAverage: number): string | number => {
      if (voteAverage) {
         return Math.round(voteAverage * 10) / 10;
      } else return "Score N/A";
   };
   return (
      <div className="flex items-center space-x-1">
         <span className="text-xl">{oneDecimal(score)}</span>
         <span className="material-icons text-yellow-600 text-xl">
            star_rate
         </span>
      </div>
   );
}
