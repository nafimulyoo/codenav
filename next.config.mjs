/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'example.com',
              port: '',
              pathname: '*',  // This allows all paths under the hostname
          },
      ],
  },
};

export default nextConfig;
