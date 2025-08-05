import React from "react";
import Row from "./Row";
import Genres from "./Genres";
import Directors from "./Directors";
import Container from "../InfoContainer/Container";
import { addCommasToNumber, separateByCommas } from "@/common/utils/commas";
type Props = {
   media: any;
   crew: any[];
   isMovie: boolean;
};

export default function MediaData({ media, crew, isMovie }: Props) {
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
      <Container>
         <table className="text-xs sm:text-sm border-spacing-y-2 border-separate">
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
      </Container>
   );
}
