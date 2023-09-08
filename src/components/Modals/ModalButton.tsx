type Props = {
   submit?: boolean;
   red?: boolean;
   blue?: boolean;
   onClick?: () => void;
   children: React.ReactNode;
   disabled?: boolean;
};

export default function ModalButton({
   submit,
   red,
   blue,
   onClick,
   children,
   disabled,
}: Props) {
   return (
      <button
         onClick={onClick || undefined}
         type={submit ? "submit" : "button"}
         className={`px-3 py-2 rounded-lg shadow-xl ${
            red
               ? "bg-red-600 text-white"
               : blue
               ? "bg-blue-600 text-white"
               : "bg-secondary-light dark:bg-secondary-dark text-light-1 dark:text-dark-1"
         } ${disabled ? "pointer-events-none" : ""}`}
      >
         {children}
      </button>
   );
}
