import useAppDispatch from "@/store/hooks/useAppDispatch";
import { loaderActions } from "@/store/slices/loader-slice";
import { useEffect } from "react";

export default function useStopLoader() {
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(loaderActions.stopLoading());
   }, []);
}
