import { Media } from "@/common/models/Media";
import Marquee from "./Marquee";

type Props = {
   groupMedia: Media[];
};

export default function GroupTicker({ groupMedia: g }: Props) {
   const array1 = g.slice(0, 7);
   const array2 = g.slice(7, 14);
   const array3 = g.slice(14, 20);
   const bigArray = [[...array1], [...array2], [...array3]];

   return (
      <div className="flex gap-1 w-full xl:w-[410px] flex-shrink-0 h-full overflow-hidden">
         {bigArray.map((array, index) => (
            <Marquee key={index} array={array} reverse={index % 2 !== 0} />
         ))}
      </div>
   );
}
