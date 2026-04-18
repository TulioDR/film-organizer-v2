import Clapperboard from "../Clapperboard";

type Props = {};

export default function LoadingBoard({}: Props) {
   return (
      <div className="h-[100svh] w-full fixed top-0 left-0 z-[200]">
         <div className="absolute right-4 bottom-16 translate-y-1 xl:translate-y-0 xl:bottom-4 flex items-center justify-center">
            <div className="w-56 rounded-md aspect-square bg-white dark:bg-black shadow-md border border-border-light dark:border-border-dark overflow-hidden">
               <div className="w-full h-full flex flex-col gap-2 items-center justify-center translate-y-[5%]">
                  <div className="w-3/6 -rotate-[10deg] origin-bottom-left">
                     <Clapperboard withReel spinningReel />
                  </div>
                  <div className="h-10 w-[70%] bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark flex items-center justify-center rounded-lg">
                     <span className="font-title text-xl text-accent">
                        Loading...
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
