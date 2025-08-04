/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "www.google.com", "api.microlink.io", "peerlist.io"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.innerGraph = false;
    }
    return config;
  },
};

export default nextConfig;
