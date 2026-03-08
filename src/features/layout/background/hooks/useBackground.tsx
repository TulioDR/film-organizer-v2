import useAppDispatch from "@/store/hooks/useAppDispatch";
import { backgroundActions } from "@/store/slices/background-slice";

export default function useBackground() {
   const dispatch = useAppDispatch();

   const changeBackground = (path: string) => {
      dispatch(backgroundActions.setBackground(path));
   };
   const removeBackground = () => {
      dispatch(backgroundActions.removeBackground());
   };

   return { changeBackground, removeBackground };
}
