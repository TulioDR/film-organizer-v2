import { useEffect, useState } from "react";
import InfoSubtitle from "../InfoSubtitle";
import Person from "./Person";
import PeoplePagination from "./PeoplePagination";
import useWindowWidth from "@/hooks/useWindowWidth";

type Props = {
   people: any[];
   type: string;
};

export default function People({ people, type }: Props) {
   const [page, setPage] = useState<number>(1);
   const [itemsPerPage, setItemsPerPage] = useState<number>(5);

   const initialPeople = people.slice(0, itemsPerPage);
   const [displayedPeople, setDisplayedPeople] = useState<any[]>(initialPeople);

   const { windowWidth } = useWindowWidth();

   useEffect(() => {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setDisplayedPeople(people.slice(start, end));
   }, [page, itemsPerPage, people]);

   useEffect(() => {
      const w = windowWidth;
      if (w > 1536) setItemsPerPage(5);
      else if (w > 1280) setItemsPerPage(4);
      else if (w > 1024) setItemsPerPage(4);
      else if (w > 768) setItemsPerPage(5);
      else if (w > 640) setItemsPerPage(4);
      else setItemsPerPage(3);
   }, [windowWidth]);

   return (
      <div>
         <InfoSubtitle>{type}</InfoSubtitle>
         {displayedPeople.length ? (
            <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
               {displayedPeople.map((person, index) => (
                  <Person person={person} key={index + person.id} />
               ))}
            </div>
         ) : (
            <div>No information available about the {type}</div>
         )}
         <div className="sm:hidden">
            <PeoplePagination
               sm
               people={people}
               itemsPerPage={itemsPerPage}
               onPaginationChange={(page: number) => setPage(page)}
            />
         </div>
         <div className="hidden sm:block">
            <PeoplePagination
               people={people}
               itemsPerPage={itemsPerPage}
               onPaginationChange={(page: number) => setPage(page)}
            />
         </div>
      </div>
   );
}
