type Props = { icon: string };

export default function AuthInputIcon({ icon }: Props) {
   return (
      <div className="w-11 text-center flex-shrink-0">
         <span className="material-icons text-2xl">{icon}</span>
      </div>
   );
}
