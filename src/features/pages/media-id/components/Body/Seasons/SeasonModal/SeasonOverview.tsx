type Props = {
   overview: string;
};

export default function SeasonOverview({ overview }: Props) {
   return (
      <div className="text-xs sm:text-sm text-black/50 dark:text-white/50">
         {overview || "No overview available for this season"}
      </div>
   );
}
