type Props = {
   children: React.ReactNode;
   isSignUp?: true;
   isLogin?: boolean;
};

export default function AuthContainer({ children, isLogin, isSignUp }: Props) {
   return (
      <div
         className={`h-full flex items-center justify-center duration-500 ${
            isSignUp ? "bg-blue-600/80 text-white" : "bg-white/80 text-black"
         } ${isSignUp ? (isLogin ? "flex-[1]" : "flex-[4]") : "flex-[2]"}`}
      >
         <div className="flex flex-col items-center gap-5 w-full max-w-[24rem]">
            {children}
         </div>
      </div>
   );
}
