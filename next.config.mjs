/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com', 'www.google.com']
    },
    typescript : {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;