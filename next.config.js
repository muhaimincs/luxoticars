module.exports = {
  webpack5: true,
  images: {
    domains: [
      'images.ctfassets.net',
      'res.cloudinary.com',
      's3.us-west-2.amazonaws.com',
      'img.rnudah.com'
    ]
  },
  eslint: {
    dirs: [
      'components',
      'layouts',
      'lib',
      'pages'
    ]
  },
  async headers () {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()'
          }
        ]
      }
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }
    return config
  }
}
