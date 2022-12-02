import RevealHorizontal from "../../animations/RevealHorizontal";

type Props = {
   prevId: string;
   nextId: string;
};

export default function NavigationButtons({ prevId, nextId }: Props) {
   return (
      <RevealHorizontal fromRight>
         <div className="flex">
            <button className="">
               <div id={prevId} className="material-icons text-4xl">
                  chevron_left
               </div>
            </button>
            <button>
               <div id={nextId} className="material-icons text-4xl">
                  chevron_right
               </div>
            </button>
         </div>
      </RevealHorizontal>
   );
}
