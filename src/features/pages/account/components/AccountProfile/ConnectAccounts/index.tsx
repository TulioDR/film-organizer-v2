import React from "react";
import ConnectedAccount from "./ConnectedAccount";
import { useUser } from "@clerk/nextjs";

type Props = {};

export default function ConnectAccounts({}: Props) {
   const { user } = useUser();

   if (!user) return <></>;
   return (
      <div className="space-y-3">
         {user.externalAccounts.map((acc, index) => (
            <ConnectedAccount key={index} provider={acc.provider} />
         ))}
      </div>
   );
}
