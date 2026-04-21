import { useRouter } from "next/router";
import { useSignIn } from "@clerk/nextjs";

export default function useLogin() {
   const { signIn, errors } = useSignIn();
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
      } catch (err) {
         console.error(errors);
      }
   };

   return { handleLogin };
}
