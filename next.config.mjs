/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "www.google.com", "api.microlink.io"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
