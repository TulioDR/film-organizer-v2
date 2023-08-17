type Props = {
   message: string;
   login: boolean;
};

export default function AuthInputError({ message, login }: Props) {
   return (
      <div
         className={`lg:absolute left-0 top-full h-5 w-full text-xs sm:text-sm truncate px-3 ${
            login ? "text-red-600" : "text-red-400"
         }`}
      >
         {message}
      </div>
   );
}
