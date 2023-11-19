export default function ScrollDownIcon() {
   const ScrollIcon = () => {
      return (
         <div className="flex flex-col items-center ">
            <div className="border border-light-1 dark:border-dark-1 sm:border-dark-1 h-14 w-8 rounded-xl pt-3">
               <div className="mx-auto animate-bounce bg-light-1 dark:bg-dark-1 sm:bg-dark-1 w-1 h-4 rounded-full"></div>
            </div>
            <span className="material-symbols-outlined !text-light-1 dark:!text-dark-1 sm:!text-dark-1">
               keyboard_arrow_down
            </span>
         </div>
      );
   };

   return (
      <>
         <div className="absolute bottom-0 right-0 hidden sm:block">
            <ScrollIcon />
         </div>
         <div className="sm:hidden absolute top-5 left-1/2 -translate-x-1/2 bg-primary-light dark:bg-primary-dark rounded-2xl p-3 pb-1">
            <ScrollIcon />
         </div>
      </>
   );
}
