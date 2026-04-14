import ConnectedAccount from "./ConnectedAccount";
import { useUser } from "@clerk/nextjs";

type Props = {};

export default function ConnectAccounts({}: Props) {
   const { user } = useUser();

   if (!user) return <></>;
   return (
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4">
         {user.externalAccounts.map((acc, index) => (
            <ConnectedAccount key={index} provider={acc.provider} />
         ))}
      </div>
   );
}
