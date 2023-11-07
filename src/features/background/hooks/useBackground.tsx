import { backgroundActions } from "@/store/slices/background-slice";
import { StaticImageData } from "next/image";
import { useDispatch } from "react-redux";

export default function useBackground() {
   const dispatch = useDispatch();

   const changeBackground = (
      mediaId: number,
      image: string | StaticImageData
   ) => {
      const background = {
         backgroundKey: mediaId,
         backgroundImage: image,
      };
      dispatch(backgroundActions.setBackground(background));
   };

   const removeBackground = () => {
      dispatch(backgroundActions.removeBackground());
   };

   return { changeBackground, removeBackground };
}
