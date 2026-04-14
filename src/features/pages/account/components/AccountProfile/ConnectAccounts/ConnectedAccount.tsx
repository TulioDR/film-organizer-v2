import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import googleLogo from "@/data/images/logos/google.png";
import githubLogo from "@/data/images/logos/github.png";
import discordLogo from "@/data/images/logos/discord.png";
import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   provider: string;
};

export default function ConnectedAccount({ provider }: Props) {
   const [src, setSrc] = useState<StaticImageData | null>(null);

   useEffect(() => {
      const isGoogle = provider === "google";
      const isGithub = provider === "github";
      const isDiscord = provider === "discord";
      if (isGoogle) setSrc(googleLogo);
      if (isGithub) setSrc(githubLogo);
      if (isDiscord) setSrc(discordLogo);
   }, [provider]);

   if (!src) return <></>;
   return (
      <div
         style={{ borderRadius: STANDARD_RADIUS }}
         className="flex items-center gap-3 p-4 bg-background-light dark:bg-background-accent-dark"
      >
         <div className="aspect-square h-full relative">
            <Image src={src} alt={provider} fill sizes="100%" />
         </div>
         <div className="capitalize">{provider}</div>
      </div>
   );
}
