type Props = {
   children: React.ReactNode;
};

export default function ProfileCardsGrid({ children }: Props) {
   return <div className="w-full grid xl:grid-cols-2 gap-4">{children}</div>;
}
