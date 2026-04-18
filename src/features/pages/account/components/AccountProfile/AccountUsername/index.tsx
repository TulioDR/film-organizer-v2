import { useUser } from "@clerk/nextjs";
import AccountCard from "../../AccountCard";
import UsernameHandler from "./UsernameHandler";

type Props = {};

export default function AccountUsername({}: Props) {
   const { user } = useUser();
   return (
      <AccountCard title="Username">
         <div className="relative h-10 w-full">
            <span>{user?.username || "You do not have an username yet"}</span>
         </div>
         <div className="h-12 w-full flex justify-end">
            <UsernameHandler />
         </div>
      </AccountCard>
   );
}
