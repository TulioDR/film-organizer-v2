type Props = {
   children: React.ReactNode;
};

export default function ModalTitle({ children }: Props) {
   return (
      <div className="text-2xl mb-3 text-light-text-hard dark:text-dark-text-hard">
         {children}
      </div>
   );
}
