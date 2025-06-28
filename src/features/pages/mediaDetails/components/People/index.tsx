import Person from "./Person";
import InfoContainer from "../InfoContainer";

type Props = {
   people: any[];
   type: string;
};

export default function People({ people, type }: Props) {
   // const { windowWidth } = useWindowWidth();

   // useEffect(() => {
   //    const w = windowWidth;
   //    if (w > 1536) setItemsPerPage(4);
   //    else if (w > 1280) setItemsPerPage(4);
   //    else if (w > 1024) setItemsPerPage(4);
   //    else if (w > 768) setItemsPerPage(5);
   //    else if (w > 640) setItemsPerPage(4);
   //    else setItemsPerPage(3);
   // }, [windowWidth]);

   return (
      <InfoContainer
         itemsPerPage={4}
         subtitle={type}
         media={people}
         renderItem={(person) => <Person person={person} />}
      />
   );
}
