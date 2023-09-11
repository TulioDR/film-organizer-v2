import { useContext, createContext } from "react";

interface TransitionPosterInterface {}
const TransitionPosterContext = createContext({} as TransitionPosterInterface);
export default function useTransitionPosterContext() {
   return useContext(TransitionPosterContext);
}

interface Props {
   children: React.ReactNode;
}

export function TransitionPosterProvider({ children }: Props) {
   const value: TransitionPosterInterface = {};

   return (
      <TransitionPosterContext.Provider value={value}>
         {children}
      </TransitionPosterContext.Provider>
   );
}
