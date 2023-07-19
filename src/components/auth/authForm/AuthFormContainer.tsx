type Props = {
   children: React.ReactNode;
};

export default function AuthFormContainer({ children }: Props) {
   return (
      <div className="w-full h-full flex items-center justify-center">
         <div className="flex flex-col items-center gap-6 w-full max-w-[24rem]">
            {children}
         </div>
      </div>
   );
}
