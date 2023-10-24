import AuthTitle from "../AuthForm/AuthTitle";
import AuthMessage from "../AuthForm/AuthMessage";
import AuthButton from "../AuthButton";
import PanelContainer from "./PanelContainer";

type Props = {
   openLogin: () => void;
};

export default function LoginPanel({ openLogin }: Props) {
   return (
      <PanelContainer>
         <AuthTitle>Already have an account?</AuthTitle>
         <AuthMessage>
            Login to keep track of your favorites movies and series
         </AuthMessage>
         <AuthButton onClick={openLogin}>Log in</AuthButton>
      </PanelContainer>
   );
}
