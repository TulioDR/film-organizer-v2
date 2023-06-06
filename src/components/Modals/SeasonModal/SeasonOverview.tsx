import RevealHorizontal from "@/animations/RevealHorizontal";

type Props = {
   overview: string;
};

export default function SeasonOverview({ overview }: Props) {
   return (
      <RevealHorizontal stagger>
         <div className="mt-3 text-xs sm:text-sm text-dark-text-normal">
            {overview || "No overview available for this season"}
         </div>
      </RevealHorizontal>
   );
}
