import { motion } from "framer-motion";
import { addCommasToNumber, separateByCommas } from "@/utils/commas";
import Directors from "./Directors";
import Genres from "./Genres";
import Row from "./Row";
import Subtitle from "@/components/Subtitle";

type Props = {
   media: any;
   isMovie: boolean;
   crew: any[];
};

export default function Overview({ media, isMovie, crew }: Props) {
   const separateArray = (array: any[]): JSX.Element[] => {
      return array.map((item, index) => (
         <span key={item.iso_639_1 || item.id} className="mr-2">
            {item.english_name || item.name}
            {separateByCommas(array, index)}
         </span>
      ));
   };
   const budgetValue = media.budget
      ? `${addCommasToNumber(media.budget)}$`
      : "Not Available";

   const revenueValue = media.revenue
      ? `${addCommasToNumber(media.revenue)}$`
      : "Not Available";

   const directorsValue = crew.filter((person) => person.job === "Director");
   return (
      <motion.div
         initial={{ y: 100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{ y: 100, opacity: 0 }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
         className="text-xs sm:text-sm"
      >
         <Subtitle>Overview</Subtitle>
         {media.tagline && (
            <div className="italic font-bold mb-1 text-light-2 dark:text-dark-2">
               {media.tagline}
            </div>
         )}
         <div>{media.overview || "No overview available"}</div>

         <table className="mt-5">
            <tbody>
               <Row
                  name="Genres"
                  value={<Genres genres={media.genres} isMovie={isMovie} />}
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
                  value={separateArray(media.production_companies)}
               />
               <Row
                  name="Spoken Languages"
                  value={separateArray(media.spoken_languages)}
               />
               {isMovie ? (
                  <>
                     <Row name="Budget" value={budgetValue} />
                     <Row name="Revenue" value={revenueValue} />
                  </>
               ) : (
                  <>
                     <Row
                        name="Networks"
                        value={separateArray(media.networks)}
                     />
                     <Row
                        name="Seasons"
                        value={media.number_of_seasons || "Not Available"}
                     />
                     <Row
                        name="Episodes"
                        value={media.number_of_episodes || "Not Available"}
                     />
                  </>
               )}
            </tbody>
         </table>
      </motion.div>
   );
}
