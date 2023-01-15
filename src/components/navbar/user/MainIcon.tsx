type Props = {
   icon: string;
};

export default function MainIcon({ icon }: Props) {
   return (
      <div className="h-full aspect-square rounded-full bg-light-bg-primary dark:bg-dark-bg-primary grid place-content-center">
         <span className="material-icons">{icon}</span>
      </div>
   );
}
