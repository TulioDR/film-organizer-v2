import useTransitionPosterContext from "../context/TransitionPosterContext";
import TransitionPosterImage from "./TransitionPosterImage";
import TransitionPosterSpinner from "./TransitionPosterSpinner";

type Props = {
   onAnimationComplete: () => void;
};

export default function TransitionPoster({ onAnimationComplete }: Props) {
   const { position, selectedImg, navbarHeight, sidebarWidth, showSpinner } =
      useTransitionPosterContext();

   if (!selectedImg || !position) return <></>;
   return (
      <div
         onMouseDown={(e) => e.preventDefault()}
         className="fixed top-0 left-0 z-50 w-full sm:h-screen flex flex-col"
      >
         <div style={{ height: navbarHeight }} className="w-full" />
         <div className="sm:flex sm:flex-1 sm:pb-10">
            <div
               style={{ width: sidebarWidth }}
               className="h-full hidden lg:block"
            />
            <div className="flex-1 h-full sm:flex px-5 sm:px-10 relative">
               <TransitionPosterImage
                  src={selectedImg}
                  position={position}
                  onAnimationComplete={onAnimationComplete}
               />
               <TransitionPosterSpinner showSpinner={showSpinner} />
            </div>
         </div>
      </div>
   );
}
