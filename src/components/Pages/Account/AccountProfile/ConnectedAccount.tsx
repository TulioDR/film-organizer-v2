import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import googleLogo from "@/data/images/logos/google.png";
import githubLogo from "@/data/images/logos/github.png";
import discordLogo from "@/data/images/logos/discord.png";

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
      <div className="flex items-center gap-3">
         <div className="aspect-square w-11 relative">
            <Image src={src} alt={provider} fill sizes="100%" />
         </div>
         <div className="capitalize">{provider}</div>
      </div>
   );
}
