import AuthTitle from "../AuthForm/AuthTitle";
import AuthMessage from "../AuthForm/AuthMessage";
import AuthButton from "../AuthButton";
import PanelContainer from "./PanelContainer";

type Props = {
   openRegister: () => void;
};

export default function RegisterPanel({ openRegister }: Props) {
   return (
      <PanelContainer>
         <AuthTitle>New Here?</AuthTitle>
         <AuthMessage>Register and start your journey with us!</AuthMessage>
         <AuthButton onClick={openRegister}>Sign Up</AuthButton>
      </PanelContainer>
   );
}
