import { separateByCommas } from "../../../../utils/commas";
import personWiki from "../../../../utils/personWiki";

type Props = {
   array: any[];
};

export default function Directors({ array }: Props) {
   return (
      <div>
         {array.map((person, index) => (
            <span
               onClick={() => personWiki(person.name)}
               key={person.id}
               className="mr-2 hover:underline cursor-pointer"
            >
               {person.name}
               {separateByCommas(array, index)}
            </span>
         ))}
      </div>
   );
}
