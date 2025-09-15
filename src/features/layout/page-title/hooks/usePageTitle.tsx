import useAppDispatch from "@/store/hooks/useAppDispatch";
import { pageTitleActions } from "@/store/slices/page-title-slice";
import { useEffect } from "react";

interface TitleSection {
   text: string;
   link: string;
}
export default function usePageTitle(
   title1: TitleSection | "movie" | "tv",
   text2: TitleSection | null = null,
   text3: TitleSection | null = null
) {
   const dispatch = useAppDispatch();

   useEffect(() => {
      let newTitle1 = null;
      if (title1 === "movie" || title1 === "tv") {
         newTitle1 = {
            text: title1 === "movie" ? "Movies" : "TV",
            link: `/${title1}`,
         };
      } else newTitle1 = title1;

      const titles = [newTitle1, text2, text3];
      dispatch(pageTitleActions.setTitle(titles));
   }, [title1, text2, text3]);
}
