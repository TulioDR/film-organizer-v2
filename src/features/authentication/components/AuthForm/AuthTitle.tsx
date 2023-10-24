type Props = {
   children: React.ReactNode;
};

export default function AuthTitle({ children }: Props) {
   return <h1 className="text-5xl text-center font-title">{children}</h1>;
}
