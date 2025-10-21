import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function LoginButton() {
   const { user } = useUser();
   if (user) return <></>;
   return (
      <Link
         href="/auth"
         className="h-full w-24 hidden sm:flex items-center justify-center bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white shadow-md"
      >
         Log in
      </Link>
   );
}
