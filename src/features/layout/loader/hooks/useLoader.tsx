import useAppDispatch from "@/store/hooks/useAppDispatch";
import useAppSelector from "@/store/hooks/useAppSelector";
import { loaderActions } from "@/store/slices/loader-slice";

export default function useLoader() {
   const { isLoading } = useAppSelector((state) => state.loader);
   const dispatch = useAppDispatch();

   const startLoading = () => {
      dispatch(loaderActions.startLoading());
   };
   const stopLoading = () => {
      dispatch(loaderActions.stopLoading());
   };

   return { isLoading, startLoading, stopLoading };
}
