import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

type Props = {};

export default function SSOCallback({}: Props) {
   return <AuthenticateWithRedirectCallback />;
}
