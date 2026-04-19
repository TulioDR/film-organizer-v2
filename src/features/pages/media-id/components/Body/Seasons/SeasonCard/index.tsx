import SeasonPoster from "./SeasonPoster";
import Header from "./Header";
import Overview from "./Overview";
import MainButton from "@/common/components/MainButton";

type Props = {
   season: any;
   onClick: () => void;
};

export default function SeasonCard({ season, onClick }: Props) {
   return (
      <article className="flex w-full overflow-hidden rounded-lg text-black bg-white dark:bg-black dark:text-white border-border-width border-border-light dark:border-border-dark shadow-lg">
         <SeasonPoster season={season} />
         <div className="flex-1 p-2 sm:p-4 h-full overflow-hidden">
            <div className="w-full h-full flex flex-col gap-2 justify-between">
               <Header season={season} />
               <Overview season={season} />
               <div className="flex justify-end w-full">
                  <MainButton onClick={onClick} text="Learn more" />
               </div>
            </div>
         </div>
      </article>
   );
}
