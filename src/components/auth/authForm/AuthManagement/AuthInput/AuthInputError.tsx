type Props = {
   message: string;
   register: boolean;
};

export default function AuthInputError({ message, register }: Props) {
   return (
      <div
         className={`absolute left-0 top-full h-5 w-full text-xs sm:text-sm truncate px-3 ${
            register ? "text-red-400" : "text-red-600"
         }`}
      >
         {message}
      </div>
   );
}
