import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html>
         <Head>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.png" />
            <link
               href="https://fonts.googleapis.com/icon?family=Material+Icons"
               rel="stylesheet"
            ></link>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin="true"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
               rel="stylesheet"
            ></link>

            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin=""
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
               rel="stylesheet"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
