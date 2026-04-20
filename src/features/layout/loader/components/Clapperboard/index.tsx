import Corners from "./Corners";
import ClapperSticks from "./ClapperSticks";
import Reel from "../Reel";

type Props = {
   withReel?: true;
   spinningReel?: true;
};

export default function Clapperboard({ withReel, spinningReel }: Props) {
   return (
      <div className="flex flex-col w-full">
         <ClapperSticks />
         <div className="w-full h-1 bg-white dark:bg-black" />
         <div className="w-full aspect-[5/3] bg-accent relative p-3">
            <div className="h-full w-full border border-[#8A7553] relative pt-3 pl-4 flex flex-col gap-3">
               <Corners />
            </div>
            {withReel && (
               <div className="absolute aspect-square h-[130%] -right-[20%] -bottom-[20%]">
                  <Reel spin={spinningReel} />
               </div>
            )}
         </div>
      </div>
   );
}
