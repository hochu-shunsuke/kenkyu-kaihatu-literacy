import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pagesのリポジトリ名に合わせてbasePath設定
  basePath: '/kenkyu-kaihatu-literacy',
  assetPrefix: '/kenkyu-kaihatu-literacy/',
};

export default nextConfig;
