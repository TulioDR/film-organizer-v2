type Props = {
   children: React.ReactNode;
};

export default function ModalTitle({ children }: Props) {
   return (
      <div className="text-2xl mb-3 text-light-1 dark:text-dark-1 font-oswald">
         {children}
      </div>
   );
}
