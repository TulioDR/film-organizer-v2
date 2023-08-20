type Props = {
   message: string;
   login?: true;
};

export default function AuthInputError({ message, login }: Props) {
   return (
      <div
         className={`w-full text-xs sm:text-sm truncate px-3 ${
            login ? "text-red-600" : "text-red-400"
         }`}
      >
         {message}
      </div>
   );
}
