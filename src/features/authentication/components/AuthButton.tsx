type Props = {
   children: React.ReactNode;
   submit?: true;
   onClick?: () => void;
};

export default function AuthButton({ children, submit, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         type={submit ? "submit" : "button"}
         className={`rounded-full px-10 py-2 text-white font-bold ${
            submit
               ? "bg-gradient-to-r from-orange-800 to-orange-600"
               : "border border-white hover:bg-white hover:text-orange-700"
         }`}
      >
         {children}
      </button>
   );
}
