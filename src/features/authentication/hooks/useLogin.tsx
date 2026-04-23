import { useRouter } from "next/router";
import { useSignIn } from "@clerk/nextjs";
import useNotification from "@/features/layout/notification/hooks/useNotification";
import { useEffect } from "react";

export default function useLogin() {
   const { signIn, errors } = useSignIn();
   const router = useRouter();

   const { showErrorNotification } = useNotification();

   useEffect(() => {
      const fields = errors.fields;
      showErrorNotification(
         fields.identifier?.message || fields.password?.message,
      );
   }, [errors.fields]);

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
      }
   };

   return { handleLogin };
}
