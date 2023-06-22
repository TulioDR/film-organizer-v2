type Props = {
   label: string;
   children: React.ReactNode;
};

export default function ProfileRow({ label, children }: Props) {
   return (
      <div>
         <span className="pr-4 text-text-3 py-2 w-28">{label}</span>
         <span className="text-text-2">{children}</span>
      </div>
   );
}
