type Props = {
   children: React.ReactNode;
};

export default function ProfileCardsGrid({ children }: Props) {
   return <div className="mx-auto grid xl:grid-cols-2 gap-10">{children}</div>;
}
