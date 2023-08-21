import Head from "next/head";
import React from "react";

type Props = {
   forgotPassWord: boolean;
   isLogin: boolean;
};

export default function AuthHead({ forgotPassWord, isLogin }: Props) {
   return (
      <Head>
         <title>
            {forgotPassWord ? "Reset Password" : isLogin ? "Login" : "Sing Up"}
         </title>
         <meta name="description" content="Generated by create next app" />
         <link rel="icon" href="/favicon.ico" />
      </Head>
   );
}