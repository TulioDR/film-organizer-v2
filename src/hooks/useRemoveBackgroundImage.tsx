import { backgroundActions } from "@/store/slices/background-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useRemoveBackgroundImage() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(backgroundActions.removeBackground());
   }, [dispatch]);
}
