import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";

export default function LoginButton() {
   const user = useUser();
   if (user) return <></>;
   return (
      <Link
         href="/auth"
         className="h-9 px-4 bg-secondary shadow-lg cursor-pointer hidden sm:flex items-center"
      >
         Log in
      </Link>
   );
}
