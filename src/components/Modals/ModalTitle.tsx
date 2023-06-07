type Props = {
   children: React.ReactNode;
};

export default function ModalTitle({ children }: Props) {
   return (
      <div className="text-2xl mb-3 text-white font-oswald">{children}</div>
   );
}
