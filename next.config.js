/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
    images: {
        domains: ['res.cloudinary.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname:'picsum.photos',
                port: '',
                pathname: '/500',
            },
            {
                // https://res.cloudinary.com/freshpm/image/upload/w_500/f_auto,q_auto/samples/bike.jpg
                protocol: 'https',
                hostname:'res.cloudinary.com',
                port: '',
                pathname: '/freshpm/image/upload/w_500/f_auto,q_auto/samples/bike.jpg',
            },
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig);
