/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.periplus.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
