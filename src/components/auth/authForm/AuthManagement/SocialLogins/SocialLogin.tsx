type Props = {
   onClick: () => void;
};

export default function SocialLogin({ onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="rounded-full bg-white h-11 aspect-square"
      ></button>
   );
}
