type Props = {
   children: React.ReactNode;
};

export default function ProfileCardInner({ children }: Props) {
   return <div className="text-light-2 dark:text-dark-2 pl-5">{children}</div>;
}
