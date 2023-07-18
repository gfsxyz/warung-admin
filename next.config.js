/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dbt0w6hil/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
