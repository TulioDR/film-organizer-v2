import AccountCard from "../AccountCard";
import { useUser } from "@clerk/nextjs";
import UpdatePassword from "./UpdatePassword";
import PageSubtitle from "@/common/components/PageSubtitle";
// import DeletePassword from "./DeletePassword";

type Props = {};

export default function AccountSecurity({}: Props) {
   const { user } = useUser();

   if (!user) return <></>;
   return (
      <div className="w-full h-full">
         <PageSubtitle>Security</PageSubtitle>
         <AccountCard
            title={user.passwordEnabled ? "Update password" : "Add password"}
         >
            <UpdatePassword />
         </AccountCard>

         {/* {user.passwordEnabled && user.externalAccounts.length > 0 && (
               <AccountCard title="Delete password" expand>
                  <DeletePassword />
               </AccountCard>
            )} */}
      </div>
   );
}
