import { motion } from "framer-motion";
import { addCommasToNumber, separateByCommas } from "../../../../utils/commas";
import Directors from "./Directors";
import Genres from "./Genres";
import Row from "./Row";

type Props = {
   tagline: string | null;
   overview: string;
   genres: any[];
   isMovie: boolean;
   crew: any[];
   productionCompanies: any[];
   spokenLanguages: any[];
   seasons: number;
   episodes: number;
   networks: any[];
   budget: number | null;
   revenue: number | null;
};

export default function Overview({
   tagline,
   overview,
   genres,
   isMovie,
   crew,
   productionCompanies,
   spokenLanguages,
   seasons,
   episodes,
   networks,
   budget,
   revenue,
}: Props) {
   const separateArray = (array: any[]): JSX.Element[] => {
      return array.map((item, index) => (
         <span key={item.iso_639_1 || item.id} className="mr-2">
            {item.english_name || item.name}
            {separateByCommas(array, index)}
         </span>
      ));
   };
   const budgetValue = budget
      ? `${addCommasToNumber(budget)}$`
      : "Not Available";

   const revenueValue = revenue
      ? `${addCommasToNumber(revenue)}$`
      : "Not Available";

   const directorsValue = crew.filter((person) => person.job === "Director");

   console.log(directorsValue);
   return (
      <motion.div
         initial={{ y: 100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{ y: 100, opacity: 0 }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
         className="pt-5 main-scrollbar"
      >
         {overview && (
            <div className="italic font-bold mb-1 text-light-text-hard dark:text-dark-text-hard">
               {tagline}
            </div>
         )}
         <div className="text-sm text-light-text-normal dark:text-dark-text-normal">
            {overview || "No overview available"}
         </div>

         <table className="text-sm mt-5">
            <tbody>
               <Row
                  name="Genres"
                  value={<Genres genres={genres} isMovie={isMovie} />}
               />
               {isMovie ? (
                  <Row
                     name="Directed by"
                     value={<Directors array={directorsValue} />}
                  />
               ) : (
                  <Row name="Created by" value={<Directors array={crew} />} />
               )}
               <Row
                  name="Production Companies"
                  value={separateArray(productionCompanies)}
               />
               <Row
                  name="Spoken Languages"
                  value={separateArray(spokenLanguages)}
               />
               {isMovie ? (
                  <>
                     <Row name="Budget" value={budgetValue} />
                     <Row name="Revenue" value={revenueValue} />
                  </>
               ) : (
                  <>
                     <Row name="Networks" value={separateArray(networks)} />
                     <Row name="Seasons" value={seasons || "Not Available"} />
                     <Row name="Episodes" value={episodes || "Not Available"} />
                  </>
               )}
            </tbody>
         </table>
      </motion.div>
   );
}
