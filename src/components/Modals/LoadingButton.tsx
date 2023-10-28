import LoadingSpinner from "../LoadingSpinner";

type Props = {
   isLoading: boolean;
   children: React.ReactNode;
};

export default function LoadingButton({ isLoading, children }: Props) {
   return (
      <div className="w-20 flex items-center justify-center">
         {isLoading ? (
            <div className="w-6">
               <LoadingSpinner white />
            </div>
         ) : (
            <span>{children}</span>
         )}
      </div>
   );
}
