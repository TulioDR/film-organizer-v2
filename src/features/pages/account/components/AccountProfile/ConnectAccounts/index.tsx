import AccountCard from "../../AccountCard";
import ConnectedAccount from "./ConnectedAccount";
import { useUser } from "@clerk/nextjs";

type Props = {};

export default function ConnectAccounts({}: Props) {
   const { user } = useUser();

   return (
      <AccountCard title="Connected accounts" className="xl:row-span-2">
         <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4">
            {user?.externalAccounts.map((acc, index) => (
               <ConnectedAccount key={index} provider={acc.provider} />
            ))}
         </div>
      </AccountCard>
   );
}
