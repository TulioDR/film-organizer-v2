import { useUser } from "@clerk/nextjs";
import PasswordHandler from "./PasswordHandler";

export default function UpdatePassword() {
   const { user } = useUser();
   return (
      <>
         {user?.passwordEnabled ? (
            <span>{"Change the account's password."}</span>
         ) : (
            <div>
               <div>
                  This account does not have a password because you login with a
                  another account.
               </div>
               <div>
                  (Check connected accounts to see which ones are you using)
               </div>
               <div>You can add a password to login with it</div>
            </div>
         )}
         <div className="flex w-full justify-end h-12">
            <PasswordHandler />
         </div>
      </>
   );
}
