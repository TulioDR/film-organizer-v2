import Head from "next/head";

type Props = { title: string; content?: string };

export default function PageHead({ title, content = "" }: Props) {
   return (
      <Head>
         <title>{title}</title>
         <meta name="description" content={content} />
         <link rel="icon" href="/favicon.ico" />
      </Head>
   );
}
