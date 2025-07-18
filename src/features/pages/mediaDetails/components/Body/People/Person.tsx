import wikiLogo from "@/data/images/logos/wikipedia.svg";
import CustomHyperlink from "../CustomHyperlink";
import getPersonWiki from "../../../utils/getPersonWiki";

type Props = { person: any };

export default function Person({ person }: Props) {
   return (
      <CustomHyperlink
         href={getPersonWiki(person.name)}
         posterPath={person.profile_path}
         alt={person.name}
         logo={wikiLogo.src}
         person
         footer={
            <div className="w-full text-xs lg:text-sm flex flex-col p-1.5 sm:p-2 md:p-4">
               <div className="truncate">{person.name}</div>
               <div className="italic truncate">
                  {person.character || person.job}
               </div>
            </div>
         }
      />
   );
}
