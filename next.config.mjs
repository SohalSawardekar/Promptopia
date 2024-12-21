/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed `appDir` if not specifically required
  serverExternalPackages: ["mongoose"], // Updated key name for external packages
  images: {
    domains: ['lh3.googleusercontent.com'], // Add trusted image domains here
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
