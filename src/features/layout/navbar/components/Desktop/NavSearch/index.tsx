import { createPortal } from "react-dom";
import SearchInput from "./SearchInput";
import CloseSearch from "./CloseSearch";
import OpenSearch from "./OpenSearch";
import SearchContent from "./SearchContent";
import useSearch from "../../../hooks/useSearch";

type Props = {};

export default function NavSearch({}: Props) {
   const { state, dispatch } = useSearch();
   const { isSearchOpen } = state;

   const handleClick = () => {
      if (isSearchOpen) dispatch({ type: "CLOSE_SEARCH" });
      else dispatch({ type: "OPEN_SEARCH" });
   };

   return (
      <>
         {!isSearchOpen ? (
            <OpenSearch onClick={handleClick} />
         ) : (
            createPortal(
               <div className="fixed top-0 left-0 h-[100svh] w-full p-4 bg-white/70 dark:bg-black/70 z-30 flex items-center justify-center">
                  <div className="flex flex-col w-full h-full xl:h-3/5 xl:w-2/5 gap-1 lg:gap-2 xl:gap-4">
                     <div className="h-12 xl:h-16 w-full flex gap-1 lg:gap-2 xl:gap-4">
                        <CloseSearch onClick={handleClick} />
                        <SearchInput state={state} dispatch={dispatch} />
                     </div>
                     <SearchContent state={state} dispatch={dispatch} />
                  </div>
               </div>,
               document.body,
            )
         )}
      </>
   );
}
