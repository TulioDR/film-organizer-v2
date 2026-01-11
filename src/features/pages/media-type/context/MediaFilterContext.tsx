import { createContext, useContext, useReducer } from "react";
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

type Props = { children: React.ReactNode };
export function MediaFilterProvider({ children }: Props) {
   const [state, dispatch] = useReducer(filterReducer, initialFilterState);

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
