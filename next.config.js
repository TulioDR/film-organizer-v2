/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
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
         {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
            pathname: "/**",
         },
      ],
   },
};

module.exports = nextConfig;
