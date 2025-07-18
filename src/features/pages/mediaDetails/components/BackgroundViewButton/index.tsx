import React from "react";
import GlassContainer from "@/components/GlassContainer";
import { useDispatch, useSelector } from "react-redux";
import { layoutActions } from "@/store/slices/layout-slice";
import StoreModel from "@/models/StoreModel";
type Props = {};

export default function BackgroundViewButton({}: Props) {
   const dispatch = useDispatch();
   const { isHidden } = useSelector((state: StoreModel) => state.layout);

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
         className="fixed bottom-4 right-4 xl:bottom-8 xl:right-8 w-16 aspect-square flex items-center justify-center hover:bg-white hover:text-black"
      >
         <span className="material-symbols-outlined">visibility</span>
      </GlassContainer>
   );
}
