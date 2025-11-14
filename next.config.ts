import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",        // ローカル
    "192.168.9.82",     // サーバーのIP
    "192.168.9.110",    // 必要なら他の端末
    "tvsgnxpsv",        // ← 実際にアクセスしているホスト名
  ],
};

export default nextConfig;
