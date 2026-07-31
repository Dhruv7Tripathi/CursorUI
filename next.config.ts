import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com", "images.unsplash.com"],
  },
};

export default nextConfig;