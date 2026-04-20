type Props = {
   icon: string;
   text: string;
   onClick: () => void;
};

export default function PreviewButton({ icon, text, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className={`flex items-center justify-center gap-1 rounded flex-1 h-full border border-border-light dark:border-border-dark
            bg-white text-black hover:bg-black hover:text-white active:bg-black active:text-white
            dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black 
         `}
      >
         <span className="material-symbols-outlined !text-xl">{icon}</span>
         <span className="text-sm capitalize">{text}</span>
      </button>
   );
}
