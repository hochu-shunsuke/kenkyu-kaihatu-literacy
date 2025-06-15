import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'kenkyu-kaihatu-literacy';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pagesの本番環境のみbasePath設定
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};

export default nextConfig;
