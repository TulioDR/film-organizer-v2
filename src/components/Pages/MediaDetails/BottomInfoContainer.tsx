import { MantineProvider } from "@mantine/core";

type Props = {
   children: React.ReactNode;
};

export default function BottomInfoContainer({ children }: Props) {
   return (
      <div className="">
         <div className="bg-primary-light dark:bg-primary-dark p-5 sm:p-10 rounded-3xl xl:flex gap-10 shadow-2xl">
            <MantineProvider theme={{ colorScheme: "dark" }}>
               {children}
            </MantineProvider>
         </div>
      </div>
   );
}
