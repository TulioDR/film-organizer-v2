type Props = { icon: string };

export default function AuthInputIcon({ icon }: Props) {
   return (
      <div className="w-11 text-center flex-shrink-0 text-light-2">
         <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
   );
}
