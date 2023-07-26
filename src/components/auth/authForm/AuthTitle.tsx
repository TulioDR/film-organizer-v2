type Props = {
   children: React.ReactNode;
};

export default function AuthTitle({ children }: Props) {
   return (
      <h1 className="text-4xl font-bold text-center font-oswald">{children}</h1>
   );
}
