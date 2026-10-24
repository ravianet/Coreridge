module.exports = {
  allowedDevOrigins: ['192.168.1.8'],
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/company/about-us',
        permanent: true,
      },
    ]
  },
}