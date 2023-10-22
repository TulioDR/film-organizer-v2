type Props = {
   message: string;
   dark?: true;
};

export default function AuthInputError({ message, dark }: Props) {
   return (
      <div
         className={`w-full text-xs sm:text-sm truncate px-3 ${
            dark ? "text-red-400" : "text-red-600"
         }`}
      >
         {message}
      </div>
   );
}
