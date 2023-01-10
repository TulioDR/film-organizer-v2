type Props = {
   children: React.ReactNode;
};

export default function AuthContainer({ children }: Props) {
   return (
      <div className="absolute top-0 left-0 h-screen w-full grid place-content-center">
         <div className="shadow-lg md:rounded-3xl overflow-hidden w-full bg-light-bg p-12 relative sm:w-[27rem] space-y-4">
            {children}
         </div>
      </div>
   );
}
