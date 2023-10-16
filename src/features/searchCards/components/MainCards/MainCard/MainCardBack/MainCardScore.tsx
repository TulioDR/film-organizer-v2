type Props = {
   voteAverage: number;
};

export default function MainCardScore({ voteAverage }: Props) {
   return (
      <div className="flex items-start gap-1">
         <span className="text-lg font-bold">{voteAverage || "N/A"}</span>
         <div className="mt-[3px] space-x-[1px] text-sm">
            <span>/</span>
            <span>10</span>
         </div>
      </div>
   );
}
