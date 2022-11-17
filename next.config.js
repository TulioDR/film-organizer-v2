/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "image.tmdb.org",
            pathname: "/t/p/**",
         },
         {
            protocol: "http",
            hostname: "i3.ytimg.com",
            pathname: "/vi/**",
         },
      ],
   },
};

module.exports = nextConfig;
