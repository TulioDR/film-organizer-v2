import { AnimatePresence, motion } from "framer-motion";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import TransitionPoster from "../animations/TransitionPoster";
import Card from "../components/card/Card";

import PageTitle from "../components/PageTitle";
import PageAnimationContainer from "../containers/PageAnimationContainer";
import usePageLoadingContext from "../context/PageLoadingContext";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { type } = context.query;
   const mediaType: "movie" | "tv" = type === "tv" ? "tv" : "movie";
   return {
      props: { mediaType },
   };
};

interface Props {
   mediaType: "tv" | "movie";
}

const container = {
   initial: {},
   animate: { transition: { staggerChildren: 0.1 } },
   exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
   },
};

export default function Popular({ mediaType }: Props) {
   const [media, setMedia] = useState<any[]>([]);
   const { setIsLoading } = usePageLoadingContext();

   const [type, setType] = useState<"tv" | "movie">(mediaType);

   useEffect(() => {
      const getData = async () => {
         console.log("fetch is running");
         const res = await fetch(`/api/popular/${type}/1`);
         const data = await res.json();
         setMedia(data.results);
         setIsLoading(false);
      };
      getData();
   }, [type, setIsLoading]);

   const [selectedImg, setSelectedImg] = useState<string | null>(null);

   return (
      <PageAnimationContainer>
         <Head>
            <title>Popular</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <PageTitle>Popular</PageTitle>
         <AnimatePresence
            mode="wait"
            onExitComplete={() => {
               const container = document.getElementById("scroll-container")!;
               container.scrollTo({ top: 0 });
               setMedia([]);
               setType(mediaType);
            }}
         >
            <motion.div
               variants={container}
               initial="initial"
               animate="animate"
               exit="exit"
               key={mediaType}
               className="grid grid-cols-4 2xl:grid-cols-5 gap-5 overflow-hidden"
            >
               {media.map((media) => (
                  <Card
                     key={media.id}
                     media={media}
                     mediaType={mediaType}
                     setSelectedImg={setSelectedImg}
                  />
               ))}
            </motion.div>
         </AnimatePresence>
         <TransitionPoster selectedImg={selectedImg} />
      </PageAnimationContainer>
   );
}
