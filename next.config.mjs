import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    newNextLinkBehavior: true,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
    providerImportSource: "@mdx-js/react",
  },
})

export default withMDX(nextConfig)
