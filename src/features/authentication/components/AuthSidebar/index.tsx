import ChangeAuthType from "./ChangeAuthType";

type Props = {
   setAuthType: (
      value: React.SetStateAction<"login" | "register" | "reset">
   ) => void;
};

export default function AuthSidebar({ setAuthType }: Props) {
   const switchToLogin = () => setAuthType("login");
   const switchToRegister = () => setAuthType("register");
   const switchToReset = () => setAuthType("reset");

   return (
      <div className="fixed top-0 left-0 flex flex-col justify-center z-10 w-36 h-screen">
         <ChangeAuthType
            onClick={switchToLogin}
            icon="login"
            text="Login"
            login
         />
         <ChangeAuthType
            onClick={switchToRegister}
            icon="how_to_reg"
            text="Register"
            register
         />
         <ChangeAuthType
            onClick={switchToReset}
            icon="no_encryption"
            text="Forgot Password"
            reset
         />
      </div>
   );
}
