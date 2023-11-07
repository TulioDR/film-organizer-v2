import { useEffect, useState } from "react";

import Person from "./Person";
import useWindowWidth from "@/hooks/useWindowWidth";
import Subtitle from "@/components/Subtitle";
import CustomPagination from "@/components/CustomPagination";

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
         <Subtitle>{type}</Subtitle>
         {displayedPeople.length ? (
            <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-1 sm:gap-5">
               {displayedPeople.map((person, index) => (
                  <Person person={person} key={index + person.id} />
               ))}
            </div>
         ) : (
            <div>No information available about the {type}</div>
         )}
         <CustomPagination
            value={page}
            total={Math.ceil(people.length / itemsPerPage)}
            onChange={(page: number) => setPage(page)}
         />
      </div>
   );
}
