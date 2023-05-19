type Props = {
   children: React.ReactNode;
};

export default function InfoSubtitle({ children }: Props) {
   return <h4 className="text-xl font-bold font-oswald mb-5">{children}</h4>;
}
