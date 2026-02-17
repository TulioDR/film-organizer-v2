import React from "react";
import { layoutActions } from "@/store/slices/layout-slice";
import GlassContainer from "@/common/components/GlassContainer";
import useAppSelector from "@/store/hooks/useAppSelector";
import useAppDispatch from "@/store/hooks/useAppDispatch";
type Props = {};

export default function BackgroundViewButton({}: Props) {
   const dispatch = useAppDispatch();
   const { isHidden } = useAppSelector((state) => state.layout);

   const handleClick = () => {
      if (isHidden) {
         dispatch(layoutActions.revealLayout());
      } else {
         dispatch(layoutActions.hideLayout());
      }
   };
   return (
      <GlassContainer
         onClick={handleClick}
         noHide
         el="button"
         className="fixed bottom-4 right-8 w-16 aspect-square flex items-center justify-center hover:bg-white hover:text-black"
      >
         <span className="material-symbols-outlined">visibility</span>
      </GlassContainer>
   );
}
