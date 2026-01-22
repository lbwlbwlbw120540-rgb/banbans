/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 启用静态导出
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['picsum.photos'], // 添加需要允许的图片域名
    unoptimized: true, // 静态导出时必须设置
  },
  async redirects() {
    return [
      // 可以在这里添加重定向规则
    ]
  },
  async rewrites() {
    return [
      // 可以在这里添加重写规则
    ]
  },
  // 如果部署在 https://username.github.io/repo-name/ 路径下，需要添加以下配置
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
}

module.exports = nextConfig