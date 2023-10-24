type Props = {
   children: React.ReactNode;
};

export default function AuthMessage({ children }: Props) {
   return (
      <div className="text-center w-full sm:w-80 mx-auto text-xs sm:text-sm md:text-base">
         {children}
      </div>
   );
}
