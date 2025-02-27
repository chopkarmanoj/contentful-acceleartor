import type { NextConfig } from "next";
import secuityHeadersConfig from "./config/headers";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    loader: 'default', 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'espire-*.**',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'contentful-*.**',
        port: '',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'contentful-accelerator.netlify.app',
      //   port: '',
      // },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
   
  },
  async headers() {
    return secuityHeadersConfig();
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
};

export default nextConfig;
