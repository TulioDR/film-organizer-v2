import { separateByCommas } from "@/common/utils/commas";
import getPersonWiki from "../../../utils/getPersonWiki";

type Props = {
   array: any[];
};

export default function Directors({ array }: Props) {
   if (!array.length) return <div>Not Available</div>;
   return (
      <div>
         {array.map((person, index) => (
            <a
               href={getPersonWiki(person.name)}
               key={person.id}
               className="mr-2 hover:underline cursor-pointer"
            >
               {person.name}
               {separateByCommas(array, index)}
            </a>
         ))}
      </div>
   );
}
