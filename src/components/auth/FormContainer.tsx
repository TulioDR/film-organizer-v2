type Props = {
   children: React.ReactNode;
   isLogin: boolean;
};

export default function FormContainer({ isLogin, children }: Props) {
   return (
      <div
         className={`w-full bg-white text-black p-12 relative ${
            isLogin ? "sm:w-96" : "sm:w-[27rem]"
         }`}
      >
         {children}
      </div>
   );
}
