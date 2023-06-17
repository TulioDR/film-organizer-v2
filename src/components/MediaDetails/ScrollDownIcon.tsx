export default function ScrollDownIcon() {
   return (
      <div className="absolute bottom-8 left-10 md:left-auto md:right-10 flex flex-col items-center">
         <div className="border border-white h-14 w-8 rounded-xl pt-3">
            <div className="mx-auto animate-bounce bg-white w-1 h-4 rounded-full"></div>
         </div>
         <span className="material-icons">keyboard_arrow_down</span>
      </div>
   );
}
