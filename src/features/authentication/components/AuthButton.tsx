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
         className={`rounded-full px-10 py-2 font-bold ${
            submit
               ? `bg-accent text-white dark:text-black
               hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white
               active:bg-white active:text-black dark:active:bg-black dark:active:text-white   
               `
               : `border border-black dark:border-white text-black dark:text-white 
               hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
               active:bg-black active:text-white dark:active:bg-white dark:active:text-black
               `
         }`}
      >
         {children}
      </button>
   );
}
