import { createContext, useContext, useEffect, useReducer } from "react";
import useFetchedOptions from "../hooks/useFetchedOptions";
import { filterReducer, initialFilterState } from "../utils/filterReducer";
import { FilterAction, FilterState, SelectOption } from "../models/Filters";

export interface MediaFilterContextInterface {
   state: FilterState;
   dispatch: React.Dispatch<FilterAction>;
   languagesOptions: SelectOption[];
   countriesOptions: SelectOption[];
}

const MediaFilterContext = createContext({} as MediaFilterContextInterface);
export default function useMediaFilterContext() {
   return useContext(MediaFilterContext);
}

type Props = {
   children: React.ReactNode;
   mediaType: "movie" | "tv";
};
export function MediaFilterProvider({ children, mediaType }: Props) {
   const computedInitialState = {
      ...initialFilterState,
      mediaType: mediaType,
   };

   useEffect(() => {
      dispatch({ type: "SET_MEDIA_TYPE", payload: mediaType });
   }, [mediaType]);

   const [state, dispatch] = useReducer(filterReducer, computedInitialState);

   const { languagesOptions, countriesOptions } = useFetchedOptions();

   const value: MediaFilterContextInterface = {
      state,
      dispatch,
      languagesOptions,
      countriesOptions,
   };

   return (
      <MediaFilterContext.Provider value={value}>
         {children}
      </MediaFilterContext.Provider>
   );
}
