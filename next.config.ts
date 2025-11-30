import type { NextConfig } from "next";
import Image from 'next/image'

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {
        protocol:'https',
        hostname: 'images.dog.ceo'
      },
    ],
  },
  allowedDevOrigins: [
    "localhost",
    "192.168.9.82",
    "192.168.9.110",
    "tvsgnxpsv",
  ],
};

export default nextConfig;
