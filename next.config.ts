import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // C'est l'hôte indiqué dans votre erreur
        port: '',
        pathname: '/**',
      },
      new URL('https://hwmltei1obospejs.public.blob.vercel-storage.com/**'),
    ],
  },
};

export default nextConfig;
