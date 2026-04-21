import { useRouter } from "next/router";
import { useSignIn } from "@clerk/nextjs";

export default function useLogin() {
   const { signIn } = useSignIn();
   const router = useRouter();

   const handleLogin = async (values: any) => {
      const { email, password } = values;
      const { error } = await signIn.password({
         emailAddress: email,
         password,
      });
      if (error) {
         console.error("error", error);
         console.log(error);
      } else {
         setTimeout(() => {
            router.push("/");
         }, 400);
      }
   };

   return { handleLogin };
}
