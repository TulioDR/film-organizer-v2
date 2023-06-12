import { useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";

export default function UserImage() {
   const user = useUser()!;
   return (
      <div className="relative h-full w-full rounded-full overflow-hidden">
         {user.user_metadata?.avatar_url ? (
            <Image
               src={user.user_metadata.avatar_url}
               alt={user.email || user.user_metadata.full_name}
               fill
               sizes="100%"
               priority
               className="object-cover"
            />
         ) : (
            <span className="uppercase text-xl">{user.email?.charAt(0)}</span>
         )}
      </div>
   );
}
