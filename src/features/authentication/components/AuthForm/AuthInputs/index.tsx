import AuthInput from "./AuthInput";

type Props = {
   login?: true;
   register?: true;
   reset?: true;
};

export default function AuthInputs({ login, register, reset }: Props) {
   return (
      <>
         {register && (
            <AuthInput
               icon="person"
               name="username"
               placeholder="Username"
               login={login}
            />
         )}
         <AuthInput
            icon="mail"
            name="email"
            placeholder="Email Address"
            login={login}
         />
         {!reset && (
            <>
               <AuthInput
                  icon="lock"
                  name="password"
                  placeholder="Password"
                  login={login}
                  password
               />
               {register && (
                  <AuthInput
                     icon="lock"
                     name="confirmPassword"
                     placeholder="Confirm Password"
                     login={login}
                     password
                  />
               )}
            </>
         )}
      </>
   );
}
