import { SpinnerCircularFixed } from "spinners-react";

type Props = {
   isLoading: boolean;
   children: React.ReactNode;
};

export default function LoadingButton({ isLoading, children }: Props) {
   return (
      <div className="w-20 flex items-center justify-center">
         {isLoading ? (
            <SpinnerCircularFixed
               size={24}
               thickness={150}
               speed={100}
               color="white"
               secondaryColor="rgba(0, 0, 0, 0.44)"
            />
         ) : (
            <span>{children}</span>
         )}
      </div>
   );
}
