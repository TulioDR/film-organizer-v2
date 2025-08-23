import { pageTitleActions } from "@/store/slices/page-title-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function usePageTitle(
   title1?: string,
   title2?: string,
   title3?: string
) {
   const dispatch = useDispatch();

   useEffect(() => {
      const titles = [title1, title2, title3];
      dispatch(pageTitleActions.setTitle(titles));
      // console.log(titles);
      // return () => {
      //    // console.log("Removing page title");
      //    dispatch(pageTitleActions.removeTitle());
      // };
   }, [title1, title2, title3]);
}
