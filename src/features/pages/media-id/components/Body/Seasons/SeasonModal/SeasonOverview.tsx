type Props = {
   overview: string;
};

export default function SeasonOverview({ overview }: Props) {
   return (
      <div className="mt-3 text-xs sm:text-sm text-text-2">
         {overview || "No overview available for this season"}
      </div>
   );
}
