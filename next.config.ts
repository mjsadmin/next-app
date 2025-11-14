import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "http://tvsgnxpsv:3000",
    "http://localhost:3000",
    "http://192.168.9.82:3000",
    "http://192.168.9.110:3000",
  ]
};

export default nextConfig;
