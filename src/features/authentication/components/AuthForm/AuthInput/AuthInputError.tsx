type Props = {
   message: string;
};

export default function AuthInputError({ message }: Props) {
   return (
      <div
         className={`w-full text-xs sm:text-sm truncate px-3 text-red-400 dark:text-red-600`}
      >
         {message}
      </div>
   );
}
