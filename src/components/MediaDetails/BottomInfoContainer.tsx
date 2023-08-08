import { MantineProvider } from "@mantine/core";

type Props = {
   children: React.ReactNode;
};

export default function BottomInfoContainer({ children }: Props) {
   return (
      <div className="px-10 pb-10">
         <div className="bg-primary p-10 rounded-xl xl:flex gap-10 shadow-2xl">
            <MantineProvider theme={{ colorScheme: "dark" }}>
               {children}
            </MantineProvider>
         </div>
      </div>
   );
}
