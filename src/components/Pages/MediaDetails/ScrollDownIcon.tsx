export default function ScrollDownIcon() {
   return (
      <div className="absolute hidden bottom-0 right-0 md:flex flex-col items-center text-white">
         <div className="border border-white h-14 w-8 rounded-xl pt-3">
            <div className="mx-auto animate-bounce bg-white w-1 h-4 rounded-full"></div>
         </div>
         <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </div>
   );
}
