type Props = {
   children: React.ReactNode;
};

export default function TitleContainer({ children }: Props) {
   return <div className="flex justify-between items-end mb-5">{children}</div>;
}
