type Props = {
   label: string;
   children: React.ReactNode;
};

export default function ProfileRow({ label, children }: Props) {
   return (
      <div>
         <span className="pr-4 text-dark-text-soft py-2 w-28">{label}</span>
         <span className="text-dark-text-normal">{children}</span>
      </div>
   );
}
