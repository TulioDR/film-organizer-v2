/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   // swcMinify: true,
   allowedDevOrigins: ["192.168.0.105", "192.168.0.101"],
   images: {
      qualities: [75, 100],
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
