type Props = {
   icon: string;
};

export default function MainIcon({ icon }: Props) {
   return (
      <div className="h-full aspect-square rounded-full bg-gray-400 dark:bg-gray-600 grid place-content-center">
         <span className="material-icons">{icon}</span>
      </div>
   );
}
