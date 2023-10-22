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
      <div className="fixed top-0 left-0 flex lg:flex-col w-full lg:w-36 h-16 lg:h-screen lg:justify-center z-10 ">
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
