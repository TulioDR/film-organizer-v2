import { useEffect, useState } from "react";
import LearnButton from "./LearnButton";
import HomePoster from "./HomePoster";
import useHomeContext from "../../context/HomeContext";

type Props = {};

export default function HomeMediaHandler({}: Props) {
   const { currentMedia, currentGroup, direction } = useHomeContext();
   const frontPath = currentMedia.poster_path;
   const [mediaType, setMediaType] = useState<"tv" | "movie">("movie");

   useEffect(() => {
      const type = currentGroup.id === "on_the_air" ? "tv" : "movie";
      setMediaType(type);
   }, [currentGroup.id]);

   return (
      <div className="w-64 2xl:w-80 aspect-square relative">
         <LearnButton href={`/${mediaType}/${currentMedia.id}`} />
         <div className="aspect-[2/3] w-2/5 rounded-md border border-border-light dark:border-border-dark -translate-x-6 2xl:-translate-x-10 overflow-hidden absolute top-1/2 left-0 -translate-y-1/2">
            <HomePoster frontPath={frontPath} direction={direction} />
         </div>
      </div>
   );
}
