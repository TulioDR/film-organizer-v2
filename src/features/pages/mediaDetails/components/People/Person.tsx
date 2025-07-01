import wikiLogo from "@/data/images/logos/wikipedia.svg";
import CustomHyperlink from "../CustomHyperlink";
import getPersonWiki from "../../utils/getPersonWiki";

type Props = { person: any };

export default function Person({ person }: Props) {
   return (
      <div className="flex flex-col gap-2">
         <CustomHyperlink
            href={getPersonWiki(person.name)}
            posterPath={person.profile_path}
            alt={person.name}
            logo={wikiLogo.src}
            person
         />
         <div className="w-full text-xs lg:text-sm flex flex-col truncate text-white">
            <div className="">{person.name}</div>
            <div className="italic">{person.character || person.job}</div>
         </div>
      </div>
   );
}
