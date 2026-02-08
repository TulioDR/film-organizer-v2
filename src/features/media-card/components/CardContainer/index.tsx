import MainContainer from "./MainContainer";
import TransitionContainer from "./TransitionContainer";

type Props = {
   children: React.ReactNode;
   id: string;
   direction: "prev" | "next" | "default";
   showTransition: boolean;
};

export default function CardContainer({
   children,
   id,
   direction,
   showTransition,
}: Props) {
   return (
      <div id={id} className="aspect-[2/3] w-full">
         {showTransition ? (
            <TransitionContainer layoutId={id}>{children}</TransitionContainer>
         ) : (
            <MainContainer layoutId={id} direction={direction}>
               {children}
            </MainContainer>
         )}
      </div>
   );
}
