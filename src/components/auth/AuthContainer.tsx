type Props = {
   children: React.ReactNode;
};

export default function AuthContainer({ children }: Props) {
   return (
      <div className="absolute top-0 left-0 h-screen w-full grid place-content-center">
         <div className="absolute top-0 w-full h-full grid place-items-center shadow-xl">
            <div className="shadow-lg md:rounded-3xl md:flex overflow-hidden">
               {children}
            </div>
         </div>
      </div>
   );
}
