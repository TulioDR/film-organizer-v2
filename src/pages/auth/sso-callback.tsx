import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function SSOCallback() {
   console.log("you are in SSOCallback");
   return <AuthenticateWithRedirectCallback />;
}
