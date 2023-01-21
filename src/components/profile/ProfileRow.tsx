type Props = {
   label: string;
   children: React.ReactNode;
};

export default function ProfileRow({ label, children }: Props) {
   return (
      <div>
         <span className="pr-4 text-light-text-soft dark:text-dark-text-soft py-2 w-28">
            {label}
         </span>
         <span className="text-light-text-normal dark:text-dark-text-normal">
            {children}
         </span>
      </div>
   );
}
