import { useEffect } from "react";

type Props = {
   message: string;
};

export default function AuthInputError({ message }: Props) {
   useEffect(() => {
      console.log("loaded");
   }, []);
   return (
      <div className={`text-xs truncate text-red-400 dark:text-red-600`}>
         {message}
      </div>
   );
}
