import { useRouter } from "next/router";
import { useSignIn } from "@clerk/nextjs";

export default function useLogin() {
   const { signIn } = useSignIn();
   const router = useRouter();
   const handleLogin = async (values: any) => {
      const { email, password } = values;
      try {
         await signIn.password({
            identifier: email,
            password: password,
         });

         if (signIn.status === "complete") {
            await signIn.finalize();

            const destination = router.query.redirect_url as string;
            if (destination) router.push(destination);
            else router.push("/");
         }
      } catch (err: any) {
         console.error("Sign-up attempt not complete:", signIn);
         console.error(JSON.stringify(err, null, 2));
      }
   };

   return { handleLogin };
}
