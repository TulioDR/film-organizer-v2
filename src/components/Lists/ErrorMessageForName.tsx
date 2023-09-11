type Props = {
   error: string | null;
   setShowError: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function ErrorMessageForName({ error, setShowError }: Props) {
   return (
      <div className="absolute left-0 top-full z-10 bg-red-500 text-white w-full h-10 rounded-lg px-5 flex items-center justify-between">
         <span className="text-xs 2xl:text-sm">{error}</span>
         <button
            onClick={() => setShowError(null)}
            className="h-full grid place-content-center w-12"
         >
            <span className="material-icons">close</span>
         </button>
      </div>
   );
}
