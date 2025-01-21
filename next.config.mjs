/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh5.googleusercontent.com",
      "lh6.googleusercontent.com",
      "images.trvl-media.com",
      "i.giatamedia.com",
    ],
  },
  env: {
    SERP_API_KEY: process.env.SERP_API_KEY,
  },
};

export default nextConfig;
