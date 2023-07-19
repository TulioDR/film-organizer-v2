type Props = {
   children: React.ReactNode;
};

export default function MobileAuthSubmitButton({ children }: Props) {
   return (
      <button
         type="submit"
         className="text-sm font-semibold bg-primary w-full py-3 text-white "
      >
         {children}
      </button>
   );
}
