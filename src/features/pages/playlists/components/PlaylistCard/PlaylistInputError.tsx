import { useEffect } from "react";

type Props = {
   error: string | null;
   setShowError: (val: string | null) => void;
};

export default function PlaylistInputError({ error, setShowError }: Props) {
   useEffect(() => {
      const timeout = setTimeout(() => setShowError(null), 5000);
      return () => clearTimeout(timeout);
   }, [error, setShowError]);

   return (
      <div className="absolute left-0 top-full z-10 text-red-500 w-full h-10 rounded-lg flex items-center justify-between">
         <span className="text-xs 2xl:text-sm">{error}</span>
         <button
            onClick={() => setShowError(null)}
            className="h-full grid place-content-center w-12"
         >
            <span className="material-symbols-outlined">close</span>
         </button>
      </div>
   );
}
