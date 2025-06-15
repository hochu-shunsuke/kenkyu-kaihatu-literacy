import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // basePath設定を一旦コメントアウト
  // basePath: '/kenkyu-kaihatu-literacy',
  // assetPrefix: '/kenkyu-kaihatu-literacy/',
};

export default nextConfig;
