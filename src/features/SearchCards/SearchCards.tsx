import Head from "next/head";
import PageTitle from "../../components/PageTitle";
import PageAnimationContainer from "../../containers/PageAnimationContainer";
import { motion } from "framer-motion";
import Card from "../../components/card/Card";
import TransitionPoster from "../../animations/TransitionPoster";
import { useState } from "react";

type Props = {
   title: string;
   mediaArray: any[];
   mediaType: "tv" | "movie";
};

const container = {
   initial: {},
   animate: { transition: { staggerChildren: 0.1 } },
   exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
   },
};

export default function SearchCards({ title, mediaType, mediaArray }: Props) {
   const [selectedImg, setSelectedImg] = useState<string | null>(null);

   return (
      <PageAnimationContainer>
         <Head>
            <title>{title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <PageTitle>{title}</PageTitle>
         <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-4 2xl:grid-cols-5 gap-5 overflow-hidden"
         >
            {mediaArray.map((media) => (
               <Card
                  key={media.id}
                  media={media}
                  mediaType={mediaType}
                  setSelectedImg={setSelectedImg}
               />
            ))}
         </motion.div>
         <TransitionPoster selectedImg={selectedImg} />
      </PageAnimationContainer>
   );
}