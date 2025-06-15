import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pagesのリポジトリ名に合わせてbasePath設定（必要に応じて）
  // basePath: '/kenkyu-kaihatu-literacy',
  // assetPrefix: '/kenkyu-kaihatu-literacy/',
};

export default nextConfig;
