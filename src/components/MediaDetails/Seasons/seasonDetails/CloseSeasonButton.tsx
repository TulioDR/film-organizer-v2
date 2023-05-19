import RevealHorizontal from "../../../../animations/RevealHorizontal";

type Props = { onClick: () => void };

export default function CloseSeasonButton({ onClick }: Props) {
   return (
      <div className="absolute z-10 top-0 right-0">
         <RevealHorizontal stagger fromRight>
            <button
               onClick={onClick}
               className="w-10 h-10 rounded-md bg-light-bg-secondary text-light-text-hard dark:bg-dark-bg-secondary dark:text-dark-text-hard grid place-content-center shadow-lg"
            >
               <span className="material-icons">close</span>
            </button>
         </RevealHorizontal>
      </div>
   );
}
