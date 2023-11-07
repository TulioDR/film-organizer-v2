type Props = {
   icon: string;
};

export default function MainIcon({ icon }: Props) {
   return (
      <div className="h-full aspect-square rounded-full bg-primary grid place-content-center">
         <span className="material-symbols-outlined">{icon}</span>
      </div>
   );
}
