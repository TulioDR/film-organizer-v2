type Props = {
   submit?: boolean;
   red?: boolean;
   blue?: boolean;
   onClick?: () => void;
   children: React.ReactNode;
};

export default function ModalButton({
   submit,
   red,
   blue,
   onClick,
   children,
}: Props) {
   return (
      <button
         onClick={onClick || undefined}
         type={submit ? "submit" : "button"}
         className={`px-3 py-2 rounded-lg ${
            red ? "bg-red-600" : blue ? "bg-blue-600" : "bg-gray-500"
         } `}
      >
         {children}
      </button>
   );
}
