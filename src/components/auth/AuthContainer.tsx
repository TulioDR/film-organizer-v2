type Props = {
   children: React.ReactNode;
   setError: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function AuthContainer({ children, setError }: Props) {
   return (
      <div className="absolute top-0 left-0 h-screen w-full flex items-center justify-center sm:p-0 px-5 overflow-y-auto">
         <div
            onClick={() => setError(null)}
            className="shadow-lg rounded-3xl overflow-hidden w-full bg-light-bg px-6 py-12 sm:p-12 relative sm:w-[27rem] space-y-4"
         >
            {children}
         </div>
      </div>
   );
}
