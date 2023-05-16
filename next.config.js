/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
    },
}

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      providerImportSource: '@mdx-js/react',
    },
});
module.exports = withMDX(nextConfig)

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:'picsum.photos',
                port: '',
                pathname: '/500',
            },
        ],
    },
};