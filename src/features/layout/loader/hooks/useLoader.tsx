import Store from "@/common/models/Store";
import { loaderActions } from "@/store/slices/loader-slice";
import { useDispatch, useSelector } from "react-redux";

export default function useLoader() {
   const { isLoading } = useSelector((state: Store) => state.loader);
   const dispatch = useDispatch();

   const startLoading = () => {
      dispatch(loaderActions.startLoading());
   };
   const stopLoading = () => {
      dispatch(loaderActions.stopLoading());
   };

   return { isLoading, startLoading, stopLoading };
}
