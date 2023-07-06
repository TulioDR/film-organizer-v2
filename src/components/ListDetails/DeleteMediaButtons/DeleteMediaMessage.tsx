type Props = {
   isDeleteOpen: boolean;
};

export default function DeleteMediaMessage({ isDeleteOpen }: Props) {
   return (
      <div
         className={`h-full duration-200 overflow-hidden ${
            isDeleteOpen ? "w-72" : "w-0"
         }`}
      >
         <div className="shrink-0 h-full w-72 flex items-center justify-center float-right">
            Which ones you want to remove?
         </div>
      </div>
   );
}
