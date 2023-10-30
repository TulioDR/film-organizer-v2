import useTransitionPosterContext from "../context/TransitionPosterContext";
import TransitionPosterImage from "./TransitionPosterImage";
import TransitionPosterSpinner from "./TransitionPosterSpinner";

type Props = {
   onAnimationComplete: () => void;
};

export default function TransitionPoster({ onAnimationComplete }: Props) {
   const { position, selectedImg, sidebarWidth, showSpinner } =
      useTransitionPosterContext();

   if (!selectedImg || !position) return <></>;
   return (
      <div className="fixed top-0 left-0 z-50 overflow-hidden flex gap-10 w-screen h-screen">
         <div style={{ width: sidebarWidth }} className="h-full" />
         <div className="flex-1 h-full flex">
            <TransitionPosterImage
               src={selectedImg}
               position={position}
               sidebarWidth={sidebarWidth}
               onAnimationComplete={onAnimationComplete}
            />
            <TransitionPosterSpinner showSpinner={showSpinner} />
         </div>
      </div>
   );
}
